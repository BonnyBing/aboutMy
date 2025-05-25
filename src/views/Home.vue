<template>
  <div class="home">
    <div class="hero">
      <h1>黄冰冰</h1>
      <p>Web前端开发工程师</p>
    </div>

    <div class="skills">
      <h2>联系方式</h2>
      <div class="skills-grid">
        <div class="skill-card" @click="router.push('/about')">
          <el-icon>
            <Monitor />
          </el-icon>
          <h3>前端开发</h3>
          <p>点击查看我的技术栈</p>
        </div>

        <div class="skill-card" @click="router.push('/contact')">
          <el-icon>
            <Message />
          </el-icon>
          <h3>联系方式</h3>
          <p>点击查看联系方式</p>
        </div>

        <div class="skill-card" @click="router.push('/projects')">
          <el-icon>
            <Collection />
          </el-icon>
          <h3>项目经验</h3>
          <p>点击查看项目案例</p>
        </div>

        <div class="skill-card" @click="router.push('/ai-tools')">
          <el-icon>
            <Connection />
          </el-icon>
          <h3>AI工具应用</h3>
          <p>点击查看AI工具使用经验</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, Message, Collection, Connection } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #409EFF, #36D1DC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: #a0a0a0;
  }
}

.skills {
  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #ffffff;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .skill-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.1);
    }

    .el-icon {
      font-size: 2.5rem;
      color: #409EFF;
      margin-bottom: 1rem;
    }

    h3 {
      color: #ffffff;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    p {
      color: #a0a0a0;
      font-size: 0.9rem;
    }
  }
}
</style>