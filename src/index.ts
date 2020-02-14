import { Transform } from "stream";

export default class RNAPolymeraseStream extends Transform {
  _transform(chunk: string, _1: any, callback: () => void) {
    const basestring = chunk
      .toString()
      .toUpperCase()
      .trim();
    if (
      !basestring
        .split("")
        .every(
          base => base === "A" || base === "T" || base === "G" || base === "C"
        )
    ) {
      throw new Error("Invalid base sequence input");
    }

    let sequence = "";
    for (let index = 0; index < basestring.length; index++) {
      const base = basestring[index];
      switch (base) {
        case "A": {
          sequence += "U";
          break;
        }
        case "T": {
          sequence += "A";
          break;
        }
        case "G": {
          sequence += "C";
          break;
        }
        case "C": {
          sequence += "G";
          break;
        }
      }
    }
    this.push(sequence);
    callback();
  }

  _flush(callback: () => void) {
    callback();
  }
}
