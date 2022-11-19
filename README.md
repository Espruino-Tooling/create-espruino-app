# create-espruino-app

An npx tool to simplify the creation of a local Espruino web application. It does this by providing a single npx command with many tags to allow the developer to have as much control over their project as is possible. There is a massive focus on ease of hosting utlising webpack to build the project into the relevant html and js files.

## Features

- Creating a base template to start working with espruino-tools in seconds.

## Using the tool

Running the NPX tool is incredibly easy first install `nodejs` if you havent already, after this you can just run a single command in the terminal:

```
npx create-espruino-app myApp
```

## Tags

To aid with improving the developers freedom there have been many tags added these consist of;

- `--template` using either "typescript", "react", "vue" to change how the npx tool generates the directory.
- `--clean-install` this can be appended to any command to remove any fluff in the package allowing for a clean template to get started with.
- `--peer` This is used to get started with the `@espruino-tools/peer` package.
