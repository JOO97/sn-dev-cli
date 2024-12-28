const download = require("download-git-repo");
const Metalsmith = require("metalsmith");
const Handlebars = require("handlebars");

const defaultUrl = "xx";

const parseOptions = (options) => {
  options = options ? options : {};
  const newOptions = {};
  const { t, tool, r, repo, d, dest } = options;
  if (t || tool) newOptions["toolName"] = t ?? tool;

  if (r || repo) newOptions["url"] = r ?? repo;
  else if (!r && !repo) newOptions["url"] = defaultUrl;

  if (d || dest) newOptions["dest"] = d ?? dest;
  else if (!d && !dest) newOptions["dest"] = process.pwd();

  return newOptions;
};

const hook = (hookName, options) => {
  // 1. parse options
  const { toolName, url, dest } = parseOptions(options);
  console.log("hook", hookName, toolName, url);

  // 2. download hook template from git
  // download(url);

  // 3. valid dest

  // 4. generate hook
  Metalsmith(__dirname)
    .source("./layouts")
    .destination("../build")
    .metadata({
      toolName,
    })
    .use((files, metalsmith, done) => {
      Object.keys(files).forEach((fileName) => {
        if (fileName !== "hook.js") return;
        const fileContentsString = files[fileName].contents.toString(); //Handlebar compile 前需要转换为字符创
        files[fileName].contents = new Buffer(
          Handlebars.compile(fileContentsString)(metalsmith.metadata())
        );
      });
      done();
    })
    .build((err) => {
      if (err) console.log("err", err);
    });
};

module.exports = (...args) => {
  return hook(...args);
};
