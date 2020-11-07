module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.indexOf("WIP:") === 0],
};
