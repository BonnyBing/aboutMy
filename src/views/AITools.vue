<template>
  <div class="ai-tools">
    <h1 class="title">AI工具应用</h1>
    <div class="tools-grid">
      <div v-for="tool in tools" :key="tool.name" class="tool-card">
        <el-icon class="tool-icon" :size="40">
          <component :is="tool.icon" />
        </el-icon>
        <h2>{{ tool.name }}</h2>
        <p>{{ tool.description }}</p>
        <div class="use-cases">
          <h3>应用场景：</h3>
          <ul>
            <li v-for="(useCase, index) in tool.useCases" :key="index">
              {{ useCase }}
            </li>
          </ul>
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
    icon: ChatDotRound,
    description: 'OpenAI 开发的大型语言模型，擅长自然语言处理和对话生成。',
    useCases: [
      '代码审查和优化建议',
      '技术文档编写和翻译',
      '问题排查和解决方案生成',
      '学习新技术和概念解释'
    ]
  },
  {
    name: 'Claude',
    icon: Connection,
    description: 'Anthropic 开发的 AI 助手，擅长长文本理解和生成。',
    useCases: [
      '复杂技术问题分析',
      '代码重构和架构设计',
      '技术方案评估和优化',
      '知识库构建和维护'
    ]
  },
  {
    name: 'Cursor',
    icon: Monitor,
    description: '基于 AI 的智能代码编辑器，提供实时代码补全和建议。',
    useCases: [
      '智能代码补全',
      '代码重构建议',
      'Bug 检测和修复',
      '代码风格优化'
    ]
  }
]
</script>

<style scoped lang="scss">
.ai-tools {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    background: linear-gradient(135deg, var(--primary-color), #36cfc9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .tool-card {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .tool-icon {
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    h2 {
      color: var(--text-color);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    p {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .use-cases {
      width: 100%;
      text-align: left;

      h3 {
        color: var(--text-color);
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          color: #666;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;

          &:before {
            content: "•";
            color: var(--primary-color);
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }
}

// 暗色主题
@media (prefers-color-scheme: dark) {
  .ai-tools {
    .tool-card {
      background: #242424;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

      &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }

      p,
      .use-cases li {
        color: #a0a0a0;
      }
    }
  }
}

// 响应式设计
@media screen and (max-width: 768px) {
  .ai-tools {
    padding: 1rem;

    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .tools-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .tool-card {
      padding: 1.5rem;
    }
  }
}
</style>