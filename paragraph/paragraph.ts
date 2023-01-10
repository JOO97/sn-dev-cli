// 类型文件
import type { ExtractPropTypes, PropType } from "vue";

//emits
export const events = ["click", "mouseenter", "mouseleave"];

//默认样式配置
export const defaultStyleProps: object = {
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
        value: "1px 0px 10px rgb(85 138 187)",
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
    radius: "2px",
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
  //动画
  animation: {
    // 切换动画
    switch: {
      show: false,
      duration: 0.8, //单位秒
    },
  },
};

// 切换动画数据
type TypeAnimation = {
  enter: string;
  leave: string;
};

// 数据
type TypeData = {
  text: string | number;
  url?: string;
  [key: string]: any;
};

export const paragraphProps = {
  // 跑马灯动画 (文本超出时生效)
  marquee: {
    type: Boolean,
    default: false,
  },
  // 跑马灯动画时长
  marqueeDuration: {
    type: Number,
    default: 2,
  },
  // 鼠标移入时暂停跑马灯动画
  marqueePauseOnMouseEnter: {
    type: Boolean,
    default: true,
  },
  //title
  textTitle: {
    type: [Boolean, String, Number],
    default: false,
  },
  //链接模式
  link: {
    type: Boolean,
    default: false,
  },
  //跳转方式
  target: {
    type: String as PropType<"_blank" | "_self">,
    default: "_blank",
  },
  //切换动画
  animationNames: {
    type: Object as PropType<TypeAnimation>,
    default: () => ({
      enter: "fadeInRight",
      leave: "fadeOutLeft",
    }),
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100px",
  },
  //样式配置
  styleProps: {
    type: Object,
    default: () => defaultStyleProps,
  },
  //组件数据
  data: {
    type: Object as PropType<TypeData>,
    default: () => ({
      text: "DataV数据可视化是使用可视化应用的方式来分析并展示庞杂数据的产品。DataV旨在让更多的人看到数据可视化的魅力，帮助非专业的工程师通过图形化的界面轻松搭建专业水准的可视化应用，满足您会议展览、业务监控、风险预警、地理信息分析等多种业务的展示需求。",
      url: "http://datav.aliyun.com/",
    }),
  },
  //元素id, 需唯一
  id: {
    type: String,
    default: "",
  },
};

export type paragraphProps = ExtractPropTypes<typeof paragraphProps>;
