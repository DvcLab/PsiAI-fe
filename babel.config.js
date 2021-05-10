module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "markup", "yaml"],
        plugins: ["line-numbers", "copy-to-clipboard"],
        theme: "default",
        css: true
      }
    ]
  ]
}
