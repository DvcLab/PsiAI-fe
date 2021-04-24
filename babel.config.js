module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "markup"],
        plugins: ["line-numbers", "copy-to-clipboard-button"],
        theme: "okaidia",
        css: true
      }
    ]
  ]
}
