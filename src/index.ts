#! /usr/bin/env node
var util = require("util");
const yargs = require("yargs");
var exec = util.promisify(require("child_process").exec);
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

async function generateInstall(clone_str: string, peer = false) {
  console.log(colorize(93, " [1/3]"), colorize(95, "- cloning git repo"));
  try {
    let clone = await exec(clone_str + app_name + " --force");
    console.log(
      colorize(90, clone.stdout + "\n"),
      colorize(93, "[2/3]"),
      colorize(95, "- installing node modules")
    );

    let installDeps = await exec(
      "cd " +
        app_name +
        " && npm i" +
        ` && npm install @espruino-tools/core ${peer && "@espruino-tools/peer"}`
    );
    console.log(
      colorize(90, installDeps.stdout + "\n"),
      colorize(93, "[3/3]"),
      colorize(
        92,
        "DONE!!, get started by running `cd " +
          app_name +
          "` and running npm start"
      )
    );
  } catch (e) {
    console.error(e);
  }
}

let args = yargs.argv;

let app_name = args["_"][0];

let template = args["template"];

let peer = args["peer"];

let clean_install = args["clean-install"];
if (!app_name) {
  console.log("you must enter a valid application name");
} else {
  switch (template) {
    case undefined: {
      let clone_str = `npm init clone espruino-tools/cea-javascript#${
        clean_install
          ? peer
            ? "peer "
            : "clean-install "
          : peer
          ? "peer "
          : "main "
      }`;
      generateInstall(clone_str, peer);
      break;
    }
    case "typescript": {
      let clone_str = `npm init clone espruino-tools/cea-typescript#${
        clean_install
          ? peer
            ? "peer "
            : "clean-install "
          : peer
          ? "peer "
          : "main "
      }`;
      generateInstall(clone_str, peer);
      break;
    }
    case "react": {
      let clone_str = `npm init clone espruino-tools/cea-react#${
        clean_install
          ? peer
            ? "peer "
            : "clean-install "
          : peer
          ? "peer "
          : "main "
      }`;
      generateInstall(clone_str, peer);
      break;
    }
    case "vue": {
      let clone_str = `npm init clone espruino-tools/cea-vue#${
        clean_install
          ? peer
            ? "peer "
            : "clean-install "
          : peer
          ? "peer "
          : "main "
      }`;
      generateInstall(clone_str, peer);
      break;
    }
    default: {
      throw Error(template + " is not a valid template");
    }
  }
}
