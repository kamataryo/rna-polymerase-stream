#!/usr/bin/env node
import process from "process";
import RNAPolymeraseStream from "./";
process.stdin.pipe(new RNAPolymeraseStream()).pipe(process.stdout);
