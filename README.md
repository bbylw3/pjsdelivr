# JSDelivr CDN 链接转换工具

一个简单实用的在线工具，帮助你将 GitHub 文件链接和 NPM 包链接转换为 JSDelivr CDN 链接。采用 Pornhub 风格设计的用户界面。

## 功能特点

- 支持 GitHub 文件链接转换为 JSDelivr CDN 链接
  - 支持标准 GitHub 文件链接格式
  - 支持 raw.githubusercontent.com 链接格式
  - 支持包含 refs/heads 的链接格式
- 支持 NPM 包链接转换
  - 支持指定版本号
  - 支持最新版本
- 批量转换支持（多行输入）
- 一键复制转换后的链接
- 实时链接有效性验证
- 响应式设计，支持移动端访问

## 快速部署

### 方法一：GitHub Pages 部署

1. 创建新的 GitHub 仓库
2. 上传 `index.html` 文件到仓库
3. 进入仓库设置 Settings -> Pages
4. Source 选择 main 分支
5. 等待部署完成即可访问

### 方法二：Cloudflare Pages 部署

1. 创建新的 GitHub 仓库并上传 `index.html`
2. 登录 Cloudflare Dashboard
3. 进入 Pages -> Create a project
4. 连接你的 GitHub 仓库
5. 部署设置保持默认即可
6. 等待部署完成

### 方法三：Cloudflare Workers 部署

1. 登录 Cloudflare Dashboard
2. 进入 Workers & Pages
3. 创建新的 Worker
4. 复制 `worker.js` 的完整代码到 Worker 编辑器
5. 保存并部署

## 使用示例

### GitHub 文件链接转换

支持以下格式：