const { program } = require("commander");
const minimist = require("minimist");
const chalk = require("chalk");
const semver = require("semver");

program
  .version(`sn-dev-cli ${require("../package.json").version}`)
  .usage("<command> [options]");

/**
 * sn hook xxx
 * -t toolName
 * -d destPath
 * -r repoUrl
 */
program
  .command("hook")
  .description("create a hook file")
  .argument("<hook-name>", "hook name")
  .option("-t, --tool <name>", "name of sn-cp-tools")
  .option("-d, --dest <path>", "dest")
  .option("-r, --repo <repo-url>", "repo url")
  .action((name, options) => {
    const args = minimist(process.argv.slice(3));
    require("../lib/hook")(name, options);
  });

/**
 * sn datav cpn
 * -cn cnName
 * -en enName
 * -i inputPath
 * -d destPath
 */

/**
 * props-config emits-events expose-publicHandler
 */
program
  .command("datav")
  .description("create dataV component index file")
  .argument("<component-name>", "component name without prefix, input")
  .option("-l, --lib <name>", "component lib name")
  .option("-t, --tool <name>", "name of sn-cp-tools")
  .option("-d, --dest <path>", "dest")
  .option("-r, --repo <repo-url>", "repo url")
  .action((name, options) => {
    const args = minimist(process.argv.slice(3));
    console.log("options", name, options);
    console.log("args", args);
    require("../lib/create")(name, options);
  });

program.parse();
