<template>
  <div class="ai-tools">
    <div class="container">
      <h1 class="title">AI工具应用</h1>
      <div class="tools-grid">
        <div class="tool-card" v-for="tool in tools" :key="tool.name">
          <el-icon class="tool-icon"><component :is="tool.icon" /></el-icon>
          <h3>{{ tool.name }}</h3>
          <p class="description">{{ tool.description }}</p>
          <div class="use-cases">
            <h4>应用场景</h4>
            <ul>
              <li v-for="(useCase, index) in tool.useCases" :key="index">
                {{ useCase }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatDotRound, Connection, DataAnalysis, Tools } from '@element-plus/icons-vue'

const tools = [
  {
    name: 'ChatGPT',
    icon: 'ChatDotRound',
    description: '用于代码生成、问题解决和文档编写的AI助手',
    useCases: [
      '快速生成代码模板',
      '解决编程问题',
      '优化现有代码',
      '生成技术文档'
    ]
  },
  {
    name: 'Claude',
    icon: 'Connection',
    description: '擅长代码审查和技术方案设计的AI助手',
    useCases: [
      '代码审查和优化建议',
      '技术方案设计',
      '复杂问题分析',
      '最佳实践建议'
    ]
  },
  {
    name: 'Cursor',
    icon: 'Tools',
    description: '集成AI功能的现代化代码编辑器',
    useCases: [
      '智能代码补全',
      '实时代码建议',
      '代码重构',
      '快速文档生成'
    ]
  }
]
</script>

<style lang="scss" scoped>
.ai-tools {
  padding: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #409EFF, #36D1DC);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tool-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .tool-icon {
    font-size: 2.5rem;
    color: #409EFF;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  
  .description {
    color: #a0a0a0;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  
  .use-cases {
    h4 {
      color: #409EFF;
      margin-bottom: 1rem;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        color: #a0a0a0;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
        
        &:before {
          content: "•";
          color: #409EFF;
          position: absolute;
          left: 0;
        }
      }
    }
  }
}
</style> 