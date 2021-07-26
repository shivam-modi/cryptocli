#!/usr/bin/env node

import { program } from "commander";
// import * as pkg from "../package.json";

program
      .version('1.0.0')
      .command('key', 'Manage API key -- https://nomics.com')
      .command('check', 'Check Coin Price Info')
      .parse(process.argv)

// console.log("Hellow i am working");
// console.log(process.argv)