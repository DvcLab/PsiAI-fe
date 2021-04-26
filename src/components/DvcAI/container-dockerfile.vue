<script>
import Prism from "prismjs";
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-yaml';
/**
 * Container dockerfile component
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
<div data-prismjs-copy-timeout="500">
  <pre
		data-prismjs-copy="复制文本"
		data-prismjs-copy-error="按Ctrl+C复制"
		data-prismjs-copy-success="文本已复制！"><code class="language-yaml">{{file}}</code></pre>
</div>
  
    
</template>
