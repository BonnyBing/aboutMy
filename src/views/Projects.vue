<template>
  <div class="projects">
    <div class="container">
      <h1 class="title">可查看的项目</h1>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.name" class="project-card">
          <h3>{{ project.name }}</h3>
          <p class="description">{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <div class="links">
            <a :href="project.github" target="_blank" class="github-link">
              <el-button type="info" size="small">GitHub</el-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'AI医学科普助手系统',
    description: '基于大语言模型的医学科普问答系统，提供专业的医疗知识解答。',
    techStack: ['Vue3', 'TypeScript', 'Node.js', 'MongoDB', 'OpenAI API'],
    github: 'https://github.com/BonnyBing/AIdoctor'
  },
  {
    name: 'Byelide 低代码平台',
    description: '可视化低代码开发平台，支持拖拽式组件开发和实时预览。',
    techStack: ['Vue3', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket'],
    github: 'https://github.com/BonnyBing/byelide'
  }
]
</script>

<style lang="scss" scoped>
.projects {
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

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
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

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    .tech-tag {
      background: rgba(64, 158, 255, 0.1);
      color: #409EFF;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.9rem;
    }
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>