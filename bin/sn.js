const { program } = require("commander");
const minimist = require("minimist");
const chalk = require("chalk");
const semver = require("semver");

program
  .version(`sn-dev-cli ${require("../package.json").version}`)
  .usage("<command> [options]");

program
  .command("hook")
  .description("create a hook file")
  .argument("<hook-name>", "hook name")
  .option("-t, --tool <name>", "name of sn-cp-tools")
  .option("-r, --repo <repo-url>", "repo url")
  .action((name, options) => {
    const args = minimist(process.argv.slice(3));
    console.log("options", name, options);
    console.log("args", args);
    require("../lib/hook")(name, options);
  });

program.parse();
