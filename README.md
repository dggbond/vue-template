## Development

- `yarn dev` 启动项目，加参数 `-n` 表示不打开浏览器

## Tips

- Webpack module rules 中的 loader 顺序是从左往右，所以需注意顺序，比如 style-loader
不能在 css-loader 执行之前，否则就会报错

- 除了安装 vue-loader 之外，必须安装 vue-template-compiler 否则会报错。
