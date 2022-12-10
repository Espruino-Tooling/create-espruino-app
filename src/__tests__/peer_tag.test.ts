import {
  JS_vanilla,
  TS_vanilla,
  React_vanilla,
  Vue_vanilla,
} from "./assets/peer_expected_outputs";
import { lsFormatter } from "./helpers/lsFormatter";

const fs = require("fs");
var util = require("util");
var exec = util.promisify(require("child_process").exec);

describe("check file structure: --peer", () => {
  describe("check plain js", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs && mkdir peer && cd peer && npx create-espruino-app plainjs --peer`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/peer/plainjs && ls -R").then(
              async (stdout) => {
                let file_structure = await stdout;
                return file_structure;
              }
            )
        )
        .then((file_structure) => {
          expect(lsFormatter(file_structure)).toBe(JS_vanilla);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core", "@espruino-tools/peer"];

      fs.readFile(
        "../runs/peer/plainjs/package.json",
        "utf8",
        async (err, data) => {
          try {
            let packageJSON = data.json();
            expect(
              req_deps.length ==
                Object.keys(packageJSON)
                  .map((dep) => req_deps.includes(dep))
                  .filter(Boolean).length
            );
          } catch (e) {
            expect(false);
          }
        }
      );
    });
  });
  describe("check typescript", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs/peer && npx create-espruino-app --template typescript typescript --peer`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/peer/typescript && ls -R").then(
              async (stdout) => {
                let file_structure = await stdout;
                return file_structure;
              }
            )
        )
        .then((file_structure) => {
          expect(lsFormatter(file_structure)).toBe(TS_vanilla);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core", "@espruino-tools/peer"];

      fs.readFile(
        "../runs/peer/typescript/package.json",
        "utf8",
        async (err, data) => {
          try {
            let packageJSON = data.json();
            expect(
              req_deps.length ==
                Object.keys(packageJSON)
                  .map((dep) => req_deps.includes(dep))
                  .filter(Boolean).length
            );
          } catch (e) {
            expect(false);
          }
        }
      );
    });
  });

  describe("check react", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs/peer && npx create-espruino-app --template react react --peer`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/peer/react && ls -R").then(
              async (stdout) => {
                let file_structure = await stdout;
                return file_structure;
              }
            )
        )
        .then((file_structure) => {
          expect(lsFormatter(file_structure)).toBe(React_vanilla);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core", "@espruino-tools/peer"];

      fs.readFile(
        "../runs/peer/react/package.json",
        "utf8",
        async (err, data) => {
          try {
            let packageJSON = data.json();
            expect(
              req_deps.length ==
                Object.keys(packageJSON)
                  .map((dep) => req_deps.includes(dep))
                  .filter(Boolean).length
            );
          } catch (e) {
            expect(false);
          }
        }
      );
    });
  });
  describe("check vue", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs/peer && npx create-espruino-app --template vue vue --peer`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/peer/vue && ls -R").then(
              async (stdout) => {
                let file_structure = await stdout;
                return file_structure;
              }
            )
        )
        .then((file_structure) => {
          expect(lsFormatter(file_structure)).toBe(Vue_vanilla);
        })
        .finally(() => {
          setTimeout(() => {
            exec(`cd src/__tests__/runs && rm -rf peer`);
          }, 5000);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core", "@espruino-tools/peer"];

      fs.readFile(
        "../runs/peer/vue/package.json",
        "utf8",
        async (err, data) => {
          try {
            let packageJSON = data.json();
            expect(
              req_deps.length ==
                Object.keys(packageJSON)
                  .map((dep) => req_deps.includes(dep))
                  .filter(Boolean).length
            );
          } catch (e) {
            expect(false);
          }
        }
      );
    });
  });
});
