import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"DSA 算法总览","description":"","frontmatter":{},"headers":[],"relativePath":"dsa/index.md","filePath":"dsa/index.md","lastUpdated":1774722077000}');
const _sfc_main = { name: "dsa/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dsa-算法总览" tabindex="-1">DSA 算法总览 <a class="header-anchor" href="#dsa-算法总览" aria-label="Permalink to “DSA 算法总览”">​</a></h1><blockquote><p>LeetCode + HOT 100 + 高频题 + 前端面经算法题</p></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dsa/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
