<script>
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Editors component
 */
export default {
  page: {
    title: "Form Editors",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, ckeditor: CKEditor.component },
  data() {
    return {
      title: "Form Editors",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Editors",
          active: true,
        },
      ],
      editor: ClassicEditor,
      editorData:
        "<h3>Hello World!</h3><h5><b>This is an simple editable area.</b></h5>",
      content: "<h1>Some initial content</h1>",

      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor",
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 300,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" },
        ],
      },
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">CK Editor</h4>
            <p class="card-title-desc">Super simple wysiwyg editor on Bootstrap</p>
            <!-- Editor -->
            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Tinymce Editor</h4>
            <p class="card-title-desc">
              Bootstrap-wysihtml5 is a javascript
              plugin that makes it easy to create simple, beautiful wysiwyg editors
              with the help of wysihtml5 and Twitter Bootstrap.
            </p>
            <tinymce
              id="d1"
              v-model="content"
              :plugins="plugins"
              :toolbar="toolbar"
              :other_options="options"
            ></tinymce>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>