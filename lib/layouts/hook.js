module.exports = (stage) => {
  const tool = (window.tool = stage.get("{{toolName}}").hook(stage));
  window.Stage = stage;
  window.G = stage.get;
  window.ENV = "dev";
  const { Comm, Widget } = tool;

  class HookManager extends Comm {
    constructor() {
      super();

      this.components = {};
      this.layers = {
        compose: {},
        list: {},
      };
      this.apiList = {};
      this.constants = {};
      this.enum = {};
      this.cache = {};
    }

    /* 初始化 */
    init() {
      this.panelManager = new Widget.PanelManager(this, this.layers);
    }
  }

  setTimeout(() => {
    const hookManager = new HookManager();
    window.HM = hookManager;
    hookManager.init();
  }, 2000);
};
