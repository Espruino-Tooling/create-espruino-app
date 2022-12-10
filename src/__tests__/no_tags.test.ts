import {
  JS_vanilla,
  TS_vanilla,
  React_vanilla,
  Vue_vanilla,
} from "./assets/no_tags_expected_outputs";
import { lsFormatter } from "./helpers/lsFormatter";

const fs = require("fs");
var util = require("util");
var exec = util.promisify(require("child_process").exec);

describe("check file structure", () => {
  describe("check plain js", () => {
    it("should generate correct files", async () => {
      await exec(
        `cd src/__tests__/runs && mkdir notag && cd notag && npx create-espruino-app plainjs`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/notag/plainjs && ls -R").then(
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
        "../runs/notag/plainjs/package.json",
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
        `cd src/__tests__/runs/notag && npx create-espruino-app --template typescript typescript`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/notag/typescript && ls -R").then(
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
        "../runs/notag/typescript/package.json",
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
        `cd src/__tests__/runs/notag && npx create-espruino-app --template react react`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/notag/react && ls -R").then(
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
        "../runs/notag/react/package.json",
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
        `cd src/__tests__/runs/notag && npx create-espruino-app --template vue vue`
      )
        .then(
          async () =>
            await exec("cd src/__tests__/runs/notag/vue && ls -R").then(
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
            exec(`cd src/__tests__/runs && rm -rf notag`);
          }, 5000);
        });
    });

    it("should have correct dependencies", () => {
      const req_deps = ["@espruino-tools/core"];

      fs.readFile(
        "../runs/notag/vue/package.json",
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
