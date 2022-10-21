#! /usr/bin/env node
const yargs = require("yargs");
const { exec } = require("child_process");
const downloader = require("github-download-directory");

console.log(`
------------------------------------------------------------------
                        CREATE ESPRUINO APP
------------------------------------------------------------------

`);

let args = yargs.argv;

let app_name = args["_"][0];

let template = args["template"];

if (!app_name) {
  console.log("you must enter a valid application name");
} else {
  switch (template) {
    case undefined: {
      console.log("- cloning git repo");
      exec(
        "npm init clone espruino-tools/cra-javascript#main " +
          app_name +
          " --force && cd " +
          app_name +
          " && npm i"
      );
      break;
    }
    default: {
      throw Error(template + " is not a valid template");
    }
  }
}
