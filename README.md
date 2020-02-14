# RNA Polymerase Stream

DNA transcription stream.

## Usage

### CLI demo

```shell
$ cat /dev/urandom | base64 | tr -dc 'ATGC' | npx rna-polymerase-stream
```

### As a dependency

```shell
$ yarn add rna-polymerase-stream
```

```typescript
import RNAPolymeraseStream from "rna-polymerase-stream";

process.stdin.pipe(new RNAPolymeraseStream()).pipe(process.stdout);
```

### Note

Any promiter or terminater sequence cannot be detected currently.
