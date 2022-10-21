#! /usr/bin/env node
"use strict";
const yargs = require("yargs");
const { exec } = require("child_process");
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
}
else {
    switch (template) {
        case undefined: {
            console.log("- cloning git repo");
            exec("npm init clone https://github.com/callummclu/picto-clone " +
                app_name +
                "&& cd " +
                app_name +
                " && npm i");
            break;
        }
        default: {
            throw Error(template + " is not a valid template");
        }
    }
}
