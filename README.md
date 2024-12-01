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
  https://github.com/user/repo/blob/main/path/to/file.js
  https://raw.githubusercontent.com/user/repo/main/path/to/file.js
  https://raw.githubusercontent.com/user/repo/refs/heads/main/path/to/file.js

转换后：https://cdn.jsdelivr.net/gh/user/repo@main/path/to/file.js

### NPM 包链接转换

输入格式：

  package-name
  package-name@1.0.0

转换后：

  https://cdn.jsdelivr.net/npm/package-name
  https://cdn.jsdelivr.net/npm/package-name@1.0.0

## 项目结构
.
├── index.html # 静态部署版本
├── src/
│ └── worker.js # Cloudflare Workers 版本
├── wrangler.toml # Workers 配置文件
└── README.md


## 技术栈

- HTML/CSS/JavaScript
- Cloudflare Workers
- JSDelivr CDN API

## 特色功能

1. 双模式切换
   - GitHub 文件转换模式
   - NPM 包转换模式

2. 实时验证
   - 自动检测链接有效性
   - 即时反馈转换结果

3. 用户友好
   - 一键复制功能
   - 批量转换支持
   - 清晰的错误提示

4. 安全性
   - 纯前端实现
   - 无数据存储
   - 支持 HTTPS

## 注意事项

- 转换后的链接有效性取决于原始文件是否存在
- GitHub 仓库必须是公开的
- NPM 包必须发布在公共仓库中
- 建议使用 HTTPS 协议访问
- 部分地区可能需要科学上网才能访问 GitHub 相关资源

## 常见问题

1. Q: 为什么有些链接显示验证失败？
   A: 可能是因为文件不存在、仓库私有或网络问题导致。

2. Q: 支持私有仓库吗？
   A: 不支持，JSDelivr 只能访问公开仓库。

3. Q: 为什么选择 Pornhub 风格？
   A: 这种配色方案具有高识别度和良好的可读性。

## 许可证

MIT License
