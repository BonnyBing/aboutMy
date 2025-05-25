<template>
  <div class="ai-tools">
    <div class="container">
      <h1 class="title">AI工具应用</h1>
      <div class="tools-grid">
        <div v-for="tool in tools" :key="tool.name" class="tool-card">
          <el-icon class="tool-icon">
            <component :is="tool.icon" />
          </el-icon>
          <h3>{{ tool.name }}</h3>
          <p class="description">{{ tool.description }}</p>
          <div class="use-cases">
            <h4>应用场景：</h4>
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
import { ChatDotRound, Connection, Monitor } from '@element-plus/icons-vue'

const tools = [
  {
    name: 'ChatGPT',
    icon: 'ChatDotRound',
    description: '使用 ChatGPT API 进行智能对话和内容生成',
    useCases: [
      '代码优化和重构',
      '技术文档生成',
      '问题诊断和解决方案',
      'API 使用示例生成'
    ]
  },
  {
    name: 'Claude',
    icon: 'Connection',
    description: '利用 Claude 进行深度技术分析和代码审查',
    useCases: [
      '代码质量审查',
      '性能优化建议',
      '安全漏洞检测',
      '架构设计咨询'
    ]
  },
  {
    name: 'Cursor',
    icon: 'Monitor',
    description: '使用 Cursor IDE 提升开发效率',
    useCases: [
      '智能代码补全',
      'AI 辅助编程',
      '代码重构建议',
      '实时错误检测'
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
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }

  .tool-icon {
    font-size: 2.5rem;
    color: #409EFF;
    margin-bottom: 1rem;
  }

  h3 {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .description {
    color: #a0a0a0;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .use-cases {
    h4 {
      color: #ffffff;
      margin-bottom: 0.5rem;
      font-size: 1.1rem;
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