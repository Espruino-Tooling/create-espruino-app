import {
  JS_vanilla,
  TS_vanilla,
  React_vanilla,
  Vue_vanilla,
} from "./assets/clean_expected_outputs";
import { lsFormatter } from "./helpers/lsFormatter";

const fs = require("fs");
var util = require("util");
var exec = util.promisify(require("child_process").exec);

describe("check file structure: --clean-install", () => {
  describe("check plain js", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs && mkdir clean && cd clean && npx create-espruino-app plainjs --clean-install`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/clean/plainjs && ls -R").then(
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
      const req_deps = ["@espruino-tools/core"];

      fs.readFile(
        "../runs/clean/plainjs/package.json",
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
        `cd src/__tests__/runs/clean && npx create-espruino-app --template typescript typescript --clean-install`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/clean/typescript && ls -R").then(
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
      const req_deps = ["@espruino-tools/core"];

      fs.readFile(
        "../runs/clean/typescript/package.json",
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
        `cd src/__tests__/runs/clean && npx create-espruino-app --template react react --clean-install`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/clean/react && ls -R").then(
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
      const req_deps = ["@espruino-tools/core"];

      fs.readFile(
        "../runs/clean/react/package.json",
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
        `cd src/__tests__/runs/clean && npx create-espruino-app --template vue vue --clean-install`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/clean/vue && ls -R").then(
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
            exec(`cd src/__tests__/runs && rm -rf clean`);
          }, 5000);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core"];

      fs.readFile(
        "../runs/clean/vue/package.json",
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
