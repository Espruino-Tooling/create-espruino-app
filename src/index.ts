#! /usr/bin/env node
const yargs = require("yargs");
const { exec } = require("child_process");
const downloader = require("github-download-directory");
const cliSpinners = require("cli-spinners");

function colorize(color: any, output: string) {
  return ["\033[", color, "m", output, "\033[0m"].join("");
}
process.stdout.write(colorize(31, "\n   CCCCCCCC           "));
process.stdout.write(colorize(34, "EEEEEEEEE              "));
process.stdout.write(colorize(32, "AAAAA\n"));

process.stdout.write(colorize(31, "  CCCCCCCC           "));
process.stdout.write(colorize(34, "EEEEEEEEEEE           "));
process.stdout.write(colorize(32, "AAA   AAA\n"));

process.stdout.write(colorize(31, " CCCC                "));
process.stdout.write(colorize(34, "EEE                  "));
process.stdout.write(colorize(32, "AAA     AAA\n"));

process.stdout.write(colorize(31, " CCC                 "));
process.stdout.write(colorize(34, "EEEEEEEE             "));
process.stdout.write(colorize(32, "AAAAAAAAAAA\n"));

process.stdout.write(colorize(31, " CCCC                "));
process.stdout.write(colorize(34, "EEE                  "));
process.stdout.write(colorize(32, "AAAAAAAAAAA\n"));

process.stdout.write(colorize(31, "  CCCCCCCC           "));
process.stdout.write(colorize(34, "EEEEEEEEEEE          "));
process.stdout.write(colorize(32, "AAA     AAA\n"));

process.stdout.write(colorize(31, "   CCCCCCCC"));
process.stdout.write(colorize(91, " REATE     "));
process.stdout.write(colorize(34, "EEEEEEEEE"));
process.stdout.write(colorize(94, "  SPRUINO  "));
process.stdout.write(colorize(32, "AAA     AAA"));
process.stdout.write(colorize(92, " PP\n\n"));

let args = yargs.argv;

let app_name = args["_"][0];

let template = args["template"];

if (!app_name) {
  console.log("you must enter a valid application name");
} else {
  console.log(cliSpinners.dots.frames[0], colorize(95, "- cloning git repo"));
  console.log(
    cliSpinners.dots.frames[0],
    colorize(95, "- installing node modules")
  );
  switch (template) {
    case undefined: {
      exec(
        "npm init clone espruino-tools/cea-javascript#main " +
          app_name +
          " --force && cd " +
          app_name +
          " && npm i" +
          " && npm install @espruino-tools/device-controller"
      );
      break;
    }
    case "typescript": {
      exec(
        "npm init clone espruino-tools/cea-typescript#main " +
          app_name +
          " --force && cd " +
          app_name +
          " && npm i" +
          " && npm install @espruino-tools/device-controller"
      );
      break;
    }
    case "react": {
      exec(
        "npm init clone espruino-tools/cea-react#main " +
          app_name +
          " --force && cd " +
          app_name +
          " && npm i" +
          " && npm install @espruino-tools/device-controller"
      );
      break;
    }
    case "vue": {
      exec(
        "npm init clone espruino-tools/cea-vue#main " +
          app_name +
          " --force && cd " +
          app_name +
          " && npm i" +
          " && npm install @espruino-tools/device-controller"
      );
      break;
    }
    default: {
      throw Error(template + " is not a valid template");
    }
  }
}
