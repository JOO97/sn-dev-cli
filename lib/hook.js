const download = require("download-git-repo");
const Metalsmith = require("metalsmith");
const Handlebars = require("handlebars");

const defaultUrl = "xx";

const parseOptions = (options) => {
  options = options ? options : {};
  const newOptions = {};
  const { t, tool, r, repo } = options;
  if (t || tool) newOptions["toolName"] = t ?? tool;
  if (r || repo) newOptions["url"] = r ?? repo;
  else newOptions["url"] = defaultUrl;
  return newOptions;
};

const hook = (hookName, options) => {
  // 1. parse options
  const { toolName, url } = parseOptions(options);
  console.log("hook", hookName, toolName, url);

  // 2. download hook template from git repo
  // download(url);
  // 3. edit template

  Metalsmith(__dirname)
    .source(process.cwd())
    .destination(__dirname)
    .metadata({
      toolName,
    })
    .use((files, metalsmith, done) => {
      Object.keys(files).forEach((fileName) => {
        const fileContentsString = files[fileName].contents.toString(); //Handlebar compile 前需要转换为字符创
        files[fileName].contents = new Buffer(
          Handlebars.compile(fileContentsString)(metalsmith.metadata())
        );
      });
      done();
    })
    .build((err) => {
      console.log("err", err);
    });
};

module.exports = (...args) => {
  return hook(...args);
};
