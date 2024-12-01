const htmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8" />
    <title>JSDelivr CDN 链接转换工具</title>
    <style>
      body {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        background-color: #0a0a0a;
        color: #ffffff;
      }
      /* 这里是其他 CSS 样式... */
    </style>
</head>
<body>
    <h1>
      <div class="ph-logo">
        <span>JS</span><span class="highlight">Delivr</span>
      </div>
    </h1>

    <div class="tabs">
      <button class="tab active" onclick="switchTab('github')">GitHub 转换</button>
      <button class="tab" onclick="switchTab('npm')">NPM 转换</button>
    </div>

    <div class="container">
      <div id="github-tab">
        <h3>输入 GitHub 链接（每行一个）：</h3>
        <textarea id="github-input" placeholder="例如：
https://github.com/user/repo/blob/master/file.js
https://github.com/user/repo/blob/master/file2.css"></textarea>
      </div>

      <div id="npm-tab" style="display: none">
        <h3>输入 NPM 包信息：</h3>
        <textarea id="npm-input" placeholder="例如：
lodash@4.17.21
jquery@3.6.0"></textarea>
      </div>

      <button class="primary-btn" onclick="convertAll()">转换</button>
      <button class="secondary-btn" onclick="clearAll()">清空</button>

      <div id="result-container" class="result-container"></div>
    </div>

    <script>
      // 这里是 JavaScript 代码
      let currentTab = "github";

      function switchTab(tab) {
        // Tab 切换逻辑...
      }

      async function validateUrl(url) {
        // URL 验证逻辑...
      }

      function copyToClipboard(text, element) {
        // 复制功能逻辑...
      }

      async function convertGithubUrl(url) {
        // GitHub URL 转换逻辑...
      }

      function convertNpmPackage(input) {
        // NPM 包转换逻辑...
      }

      async function convertAll() {
        // 批量转换逻辑...
      }

      function clearAll() {
        // 清空功能逻辑...
      }
    </script>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // 处理 API 请求
    if (url.pathname === '/api/validate') {
      const targetUrl = url.searchParams.get('url');
      if (!targetUrl) {
        return new Response('Missing url parameter', { status: 400 });
      }

      try {
        const response = await fetch(targetUrl, { 
          method: 'HEAD',
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        });
        return new Response(JSON.stringify({ valid: response.ok }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ valid: false }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // 返回主页
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      }
    });
  }
}; 