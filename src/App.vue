<script setup lang="ts">
// 组件逻辑
</script>

<template>
  <div class="app">
    <el-container>
      <el-header>
        <nav class="nav-menu">
          <router-link to="/" class="nav-item">首页</router-link>
          <router-link to="/about" class="nav-item">关于我</router-link>
          <router-link to="/projects" class="nav-item">项目经验</router-link>
          <router-link to="/ai-tools" class="nav-item">AI工具应用</router-link>
          <router-link to="/contact" class="nav-item">联系方式</router-link>
        </nav>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #ffffff;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 0;
  
  .nav-item {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #409EFF;
    }
    
    &.router-link-active {
      color: #409EFF;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
