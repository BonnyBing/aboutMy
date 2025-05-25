<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="app-container">
      <el-container>
        <el-header>
          <nav class="nav-menu">
            <div class="nav-content">
              <div class="nav-links">
                <router-link to="/" class="nav-link">首页</router-link>
                <router-link to="/about" class="nav-link">关于我</router-link>
                <router-link to="/projects" class="nav-link">项目经验</router-link>
                <router-link to="/ai-tools" class="nav-link">AI工具</router-link>
                <router-link to="/contact" class="nav-link">联系方式</router-link>
              </div>
            </div>
          </nav>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style lang="scss">
:root {
  --primary-color: #409EFF;
  --text-color: #2c3e50;
  --bg-color: #f5f7fa;
  --header-height: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--bg-color);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
}

.el-container {
  min-height: 100vh;
}

.el-header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0;
  height: var(--header-height);
}

.nav-menu {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  white-space: nowrap;

  &:hover {
    color: var(--primary-color);
  }

  &.router-link-active {
    color: var(--primary-color);
    font-weight: 500;
  }
}

.el-main {
  padding-top: calc(var(--header-height) + 20px);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

// 响应式设计
@media screen and (max-width: 768px) {
  .el-header {
    height: auto;
    position: relative;
  }

  .nav-menu {
    padding: 10px 0;
  }

  .nav-content {
    padding: 0 10px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .el-main {
    padding-top: 20px;
  }
}

// 平板设备
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .nav-content {
    padding: 0 15px;
  }

  .nav-links {
    gap: 15px;
  }
}

// 暗色主题
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #e5e5e5;
    --bg-color: #1a1a1a;
  }

  .el-header {
    background-color: #242424;
  }

  .nav-link {
    color: #e5e5e5;
  }
}
</style>
