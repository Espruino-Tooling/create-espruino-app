#! /usr/bin/env node
const yargs = require("yargs");
const { exec } = require("child_process");

let args = yargs.argv;

let app_name = args["_"][0];

let template = args["template"];

if (!app_name) {
  console.log("you must enter a valid application name");
} else {
  switch (template) {
    case undefined: {
      exec(
        "npm init clone https://github.com/callummclu/hello-wasm/tree/master/src " +
          app_name
      );
      break;
    }
    default: {
      throw Error(template + " is not a valid template");
    }
  }
}
