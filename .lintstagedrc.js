const { CLIEngine } = require("eslint");

const cli = new CLIEngine({});

module.exports = {
  "*.js": (files) =>
    "eslint --max-warnings=0 " +
    files.filter((file) => !cli.isPathIgnored(file)).join(" "),
};
