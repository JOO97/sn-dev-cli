const fs = require("fs/promises");
const path = require("path");
const { styleProps } = require("./tmp.js");
const options = require("./options.json");
const words = require("./words.json");

async function inquirer2() {
  return (await import("inquirer")).default;
}

const questions = [
  {
    type: "input",
    name: "cnName",
    message: "组件中文名称",
    default() {
      return "xxx";
    },
  },
  {
    type: "input",
    name: "inputPath",
    message: "入口地址",
    default() {
      return "C:UsersLEGIONDesktopjOOCODEsn-dev-cliparagraphparagraph.ts";
    },
  },
  {
    type: "input",
    name: "destPath",
    message: "目标地址",
    default() {
      return "xxx";
    },
  },
];

const syntaxAnalyzer = (variable) => {};

const generateOptions = ({ styleProps }) => {
  const result = {
    style: {
      name: "样式配置",
      children: {},
    },
    animation: {},
  };
  const mapObject = (source) => {
    let r = {};
    Object.keys(source).forEach((key) => {
      const keyName = words[key] ? words[key] : key;
      const value = source[key];
      const valueType = typeof value;
      if (valueType === "object") {
        let r2;
        if (
          (key === "padding" || key === "margin") &&
          Object.values(value).length === 4
        ) {
          r2 = Object.assign(
            {
              default: {
                top: value["top"],
                bottom: value["bottom"],
                left: value["left"],
                right: value["right"],
              },
            },
            options["padding"]
          );
        } else if (key === "decoration") {
          r2 = Object.assign(
            {
              style: {
                default: value["style"],
              },
              color: {
                default: value["color"],
              },
              line: {
                default: value["line"],
              },
            },
            options["decoration"]
          );
        } else {
          const children = mapObject(value);
          if (!Object.keys(children).length) return;
          r2 = {
            name: keyName,
            type: "group",
            fold: false,
            children,
          };
        }
        r[key] = r2;
      } else if (
        valueType === "number" ||
        (valueType === "string" && typeof (value * 1) === "number")
      ) {
        r[key] = {
          type: "number",
          name: keyName,
          default: value,
          step: 1,
          min: 0,
          max: 100,
        };
      } else if (valueType === "string") {
        if (value.startsWith("#") || value.startsWith("rgb")) {
          r[key] = {
            name: keyName,
            type: "color",
            default: value,
          };
        } else {
          if (key === "cursor") r[key] = options["cursor"];
          else if (key === "family") r[key] = options["family"];
          else if (key === "weight") r[key] = options["weight"];
          else
            r[key] = {
              name: key,
              type: "select",
              options: [
                {
                  name: value,
                  value: value,
                },
              ],
              default: value,
            };
        }
      }
      // r[key] = value;
    });
    return r;
  };
  const res = mapObject(styleProps);
  console.log("res", res);
  result.style.children = res;
  return result;
};
// C:\Users\LEGION\Desktop\jOO\CODE\sn-dev-cli\paragraph\paragraph.ts
const create = async (name, options) => {
  const inquirer = await inquirer2();
  // 1. parse options
  // const { toolName, url, dest } = parseOptions(options);
  const answers = await inquirer.prompt(questions);
  const { cnName, inputPath, destPath } = answers;

  // const source = await fs.readFile(inputPath, { encoding: "utf8" });
  // console.log("s", source.indexOf("defaultStyleProps"));
  // console.log("s", source);
  // const styleProps = syntaxAnalyzer("defaultStyleProps");

  const o = generateOptions({
    styleProps,
  });
  await fs.writeFile(
    path.resolve(__dirname, "result.json"),
    JSON.stringify(o, null, 4)
  );
};

module.exports = (...args) => {
  return create(...args);
};
