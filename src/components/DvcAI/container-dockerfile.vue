<script>
import Prism from "prismjs";
import 'prismjs/themes/prism.css'
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
    Prism.highlightAll()
  }
};
</script>
<template>
  <!-- <div> -->
    <pre data-src="prismjs/plugins/toolbar/prism-toolbar.js">
      <code class="language-yaml" data-prismjs-copy="Copy the JavaScript snippet!">{{file}}</code>
    </pre>
  <!-- </div> -->
</template>