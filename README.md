# Zeyu Zhu Academic Homepage

这是一个可直接部署到 GitHub Pages 的静态学术主页项目，不需要构建步骤，也不需要安装依赖。

## 直接上传 GitHub

最简单的方式：

1. 新建仓库，例如 `yourname.github.io`。
2. 上传本目录中的 `index.html`、`styles.css`、`app.js`、`site-data.js`、`assets/`、`zhuzeyu_cv.pdf`、`.nojekyll`。
3. 在 GitHub 仓库的 `Settings -> Pages` 中选择从目标分支的根目录发布。

如果上传到普通项目仓库，也可以在 `Settings -> Pages` 中选择 `main` 分支和 `/root` 目录发布。

## 编辑内容

- 简历和论文数据：`site-data.js`
- 页面结构：`index.html`
- 页面样式：`styles.css`
- 渲染逻辑：`app.js`
- 侧栏 CV 文件：`zhuzeyu_cv.pdf`
- 默认头像图：`assets/research-avatar.jpg`

新增论文时，在 `site-data.js` 的 `SITE_DATA.publications` 中添加一项。公开链接填入 `paper` 和 `code`；如果还没有公开链接，留空字符串，页面会显示 `Paper TBD` 或 `Code TBD`。

如果要替换成真实头像，把图片放进 `assets/`，然后把 `SITE_DATA.profile.photo` 改成对应路径，例如 `assets/profile.jpg`。
