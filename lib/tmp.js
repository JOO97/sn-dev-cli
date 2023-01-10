const styleProps = {
  cursor: "text",
  padding: {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5,
  },
  // 文本超出样式
  overflow: {
    type: "scroll", //hidden ellipsis scroll
    // 显示省略号
    ellipsis: {
      column: 2, //行数
    },
    // 滚动
    scroll: {
      size: 6,
      radius: 10,
      bg: "rgba(255, 255, 255, 0.2)",
      hover: {
        bg: "rgba(255, 255, 255, 0.3)",
      },
    },
  },
  // 文本样式
  text: {
    lh: 24, //行高
    color: "rgba(51, 172, 255, 1)",
    gradient: {
      show: false,
      color:
        "linear-gradient(90deg, rgb(35, 255, 255) 0%, rgba(88, 142, 233, 0.5) 100%)",
    },
    shadow: {
      value: "1px 0px 10px rgb(85 138 187)",
      show: false,
    },
    size: 16,
    family: "Microsoft Yahei",
    weight: "500",
    indent: 20,
    spacing: 2,
    decoration: {
      line: "none",
      color: "rgba(255,255,255,0.8)",
      style: "solid",
    },
    hover: {
      show: false,
      color: "rgba(255,255,255,1)",
      gradient: {
        show: false,
        color:
          "linear-gradient(90deg, rgb(35, 255, 255) 0%, rgba(88, 142, 233, 0.5) 100%)",
      },
      shadow: {
        show: false,
        value: "1px 0px 10px rgb(85, 138, 187)",
      },
      weight: "500",
      decoration: {
        line: "underline",
        color: "rgba(255,255,255,0.3)",
        style: "solid",
      },
    },
  },
  // 背景
  bg: {
    show: true,
    color: "rgba(9, 30, 58, 1)",
    radius: "2",
    border: {
      show: false,
      t: {
        color: "rgba(255,255,255,0.3)",
        size: 1,
        style: "solid",
      },
      b: {
        color: "rgba(255,255,255,0.3)",
        size: 1,
        style: "solid",
      },
      l: {
        color: "rgba(255,255,255,0.3)",
        size: 1,
        style: "solid",
      },
      r: {
        color: "rgba(255,255,255,0.3)",
        size: 1,
        style: "solid",
      },
    },
  },
  animation: {
    // 切换动画
    switch: {
      show: false,
      duration: 0.8, //单位秒
    },
  },
};

exports.styleProps = styleProps;
