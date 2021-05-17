<script>
import Prism from "prismjs";

/**
 * Container dockerfile code container component
 */

export default {
  components: {},
  props: {
    file: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
    };
  },
  mounted() {
    Prism.highlightAll();
  }
};
</script>
<template>
  <div class="card">
    <div class="card-body">
      <div data-prismjs-copy-timeout="500">
        <pre
          data-prismjs-copy="复制文本"
          data-prismjs-copy-error="按Ctrl+C复制"
          data-prismjs-copy-success="文本已复制！"><code class="language-yaml">{{file}}</code></pre>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*********************************************************
* General
*/
pre[class*="language-"],
code[class*="language-"] {
  color: #5c6e74;
  font-size: 13px;
  text-shadow: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"]::selection,
code[class*="language-"]::selection,
pre[class*="language-"]::mozselection,
code[class*="language-"]::mozselection {
  text-shadow: none;
  background: #b3d4fc;
}
@media print {
  pre[class*="language-"],
  code[class*="language-"] {
    text-shadow: none;
  }
}
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  background: #f6f6f6;
}
:not(pre) > code[class*="language-"] {
  padding: .1em .3em;
  border-radius: .3em;
  color: #db4c69;
  background: #f9f2f4;
}
/*********************************************************
* Tokens
*/
.namespace {
  opacity: .7;
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #93a1a1;
}
.token.punctuation {
  color: #999999;
}
.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #990055;
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #669900;
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #a67f59;
  background: #f6f6f6;
}
.token.atrule,
.token.attr-value,
.token.keyword {
  color: #0077aa;
}
.token.function {
  color: #dd4a68;
}
.token.regex,
.token.important,
.token.variable {
  color: #ee9900;
}
.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
/*********************************************************
* Line highlighting
*/
pre[data-line] {
  position: relative;
}
pre[class*="language-"] > code[class*="language-"] {
  position: relative;
  z-index: 1;
}
.line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: #f7ebc6;
  box-shadow: inset 5px 0 0 #f7d87c;
  z-index: 0;
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}
</style>