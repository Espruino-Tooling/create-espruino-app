export const lsFormatter = (file_structure: any) => {
  return file_structure.stdout
    .split("./")
    .filter((x) => !x.startsWith("node_modules"))
    .join("")
    .split("\n")
    .filter((y) => !y.endsWith(":"))
    .filter(Boolean)
    .filter((x) => x.includes("."))
    .join("\n");
};
