<template>
  <div class="about">
    <div class="container">
      <h1 class="title">黄冰冰 - 应聘Web前端开发工程师</h1>

      <div class="content">
        <div class="profile">
          <h2>个人简介</h2>
          <div class="profile-info">
            <p class="basic-info">

              <span>学历背景：软件工程专业</span>
              <span>联系电话：19977957772</span>
              <span>微信号：b1870542488</span>
            </p>
            <p class="introduction">
              3年前端开发经验，熟练掌握Vue3、React、TypeScript等主流前端技术，具备独立负责平台级项目的能力。了解大语言模型（LLM）基本原理，具备AI产品实战经验，能够快速搭建前后端交互原型，对AGI发展保持高度关注，适应初创团队快节奏和跨领域协作氛围。
            </p>
          </div>
        </div>

        <div class="skills">
          <h2>专业技能</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>前端框架</h3>
              <p>Vue3, React, Angular, TypeScript, JavaScript，具备交互界面设计经验，能结合大模型应用开发前后端交互界面。</p>
            </div>
            <div class="skill-category">
              <h3>构建工具</h3>
              <p>Vite, Webpack，具备项目构建和优化的实践经验。</p>
            </div>
            <div class="skill-category">
              <h3>后端与数据接口</h3>
              <p>Node.js, Axios，具备基本的接口设计和数据管理能力。</p>
            </div>
            <div class="skill-category">
              <h3>数据库</h3>
              <p>MongoDB（基本维护），MySQL，具备一定的数据存储和管理经验。</p>
            </div>
            <div class="skill-category">
              <h3>AI/大模型</h3>
              <p>了解LLM基本原理，具备内容安全与Prompt设计经验，能调用DeepSeek等大模型API。</p>
            </div>
            <div class="skill-category">
              <h3>爬虫技术</h3>
              <p>Python爬虫（Scrapy、Selenium、Requests），数据解析（BeautifulSoup、XPath、正则表达式），反爬虫策略（IP代理、请求头模拟、验证码处理），分布式爬虫架构。</p>
            </div>
            <div class="skill-category">
              <h3>AI/模型知识</h3>
              <p>大语言模型应用（ChatGPT、Claude），Prompt Engineering，AI工具集成。</p>
            </div>
          </div>
        </div>

        <div class="projects">
          <h2>项目经历</h2>
          <div class="project-list">
            <div class="project-item">
              <h3>AI医学科普助手系统</h3>
              <p class="project-desc">该项目是一个面向大众的医学知识智能问答平台，整合前沿大语言模型能力（DeepSeek）与前端知识卡片系统，实现了对用户提问的智能解析、科普内容生成与结构化引导。
              </p>
              <div class="project-highlights">
                <h4>职责与亮点：</h4>
                <ul>
                  <li>集成 DeepSeek 大模型 API，构建医学领域问答助手，设计Prompt模板生成结构化内容</li>
                  <li>前端使用Vue3 + Pinia，实现多轮对话状态管理与结构化结果展示</li>
                  <li>设计知识卡片组件结构（定义、原因、预防、建议），提升输出可读性</li>
                  <li>考虑医疗内容合规，设计输入过滤与敏感提示功能</li>
                  <li>移动端适配与loading异常机制，保障交互体验</li>
                </ul>
              </div>
            </div>

            <div class="project-item">
              <h3>AI智慧旅游助手</h3>
              <p class="project-desc">结合AI与路径算法的智能旅游平台，提供用户个性化推荐、预算控制与地图交互等功能。</p>
              <div class="project-highlights">
                <h4>职责与亮点：</h4>
                <ul>
                  <li>主导平台前端开发，使用Vue3 + Vuex实现模块解耦与状态管理</li>
                  <li>结合用户偏好进行路径规划与预算优化（Dijkstra算法改进版）</li>
                  <li>集成Mapbox地图服务，实现交互式路线显示与实时渲染</li>
                  <li>使用GraphQL构建高效数据接口，提升前后端协同效率</li>
                  <li>实现跨端适配与页面性能优化，页面加载提升40%</li>
                </ul>
              </div>
            </div>

            <div class="project-item">
              <h3>Byelide 低代码平台</h3>
              <p class="project-desc">面向业务人员的低代码搭建平台，支持可视化页面组装、流程配置与动态数据绑定。</p>
              <div class="project-highlights">
                <h4>职责与亮点：</h4>
                <ul>
                  <li>使用blocksuite方案进行模块组装，提升可复用性</li>
                  <li>使用vee-validate构建动态表单与表单设计器</li>
                  <li>集成monaco-editor实现低代码编辑器、语法补全与出码逻辑</li>
                  <li>Canvas实现百万行数据高性能渲染，兼顾桌面/移动端体验</li>
                </ul>
              </div>
            </div>

            <div class="project-item">
              <h3>TOKIEBOX 对讲机管理平台</h3>
              <p class="project-desc">企业级对讲管理系统，具备设备监控、事件管理、巡逻统计、视频处理等功能。</p>
              <div class="project-highlights">
                <h4>职责与亮点：</h4>
                <ul>
                  <li>独立开发视频日历渲染器与上传规则模块</li>
                  <li>使用ffmpeg.wasm实现视频合成与剪辑</li>
                  <li>构建权限控制与导航守卫，保障数据安全</li>
                  <li>实现打卡记录图表与事件联动，可视化提升巡逻效率</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="education">
          <h2>教育经历</h2>
          <div class="education-item">
            <h3>玉林师范学院</h3>
            <p class="major">软件工程专业（本科）</p>
            <p class="period">2016.09 - 2020.06</p>
          </div>
        </div>

        <div class="self-evaluation">
          <h2>自我评价</h2>
          <p>热衷AI与产品交叉创新，具备扎实的前端开发与系统构建能力，能从数据角度思考产品逻辑与交互细节。</p>
          <p>关注LLM与AGI发展趋势，具备主动学习能力与良好的跨团队沟通协作习惯。</p>
          <p>希望在通用人工智能实践中不断提升标准化能力、安全意识与多角色协同能力，成为AI产品落地的坚实推动者。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style lang="scss" scoped>
.about {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), #36cfc9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.content {
  display: grid;
  gap: 3rem;
}

.profile,
.skills,
.projects,
.education,
.self-evaluation {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #409EFF;
  }
}

.profile-info {
  .basic-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
    background: rgba(64, 158, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;

    span {
      color: #a0a0a0;
      display: flex;
      align-items: center;
      font-size: 1.1rem;

      &::before {
        content: "•";
        color: var(--primary-color);
        margin-right: 0.5rem;
        font-size: 1.2rem;
      }
    }
  }

  .introduction {
    color: #a0a0a0;
    line-height: 1.8;
    padding: 1.5rem;
    background: rgba(64, 158, 255, 0.05);
    border-radius: 8px;
    font-size: 1.1rem;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;

  .skill-category {
    background: rgba(64, 158, 255, 0.05);
    padding: 1.5rem;
    border-radius: 8px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: #ffffff;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary-color);
      display: inline-block;
    }

    p {
      color: #a0a0a0;
      line-height: 1.6;
      font-size: 1.1rem;
    }
  }
}

.project-list {
  display: grid;
  gap: 2rem;

  .project-item {
    h3 {
      color: #ffffff;
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }

    .project-desc {
      color: #a0a0a0;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    .project-highlights {
      h4 {
        color: #409EFF;
        margin-bottom: 0.8rem;
      }

      ul {
        list-style: none;
        padding-left: 1.5rem;

        li {
          color: #a0a0a0;
          margin-bottom: 0.5rem;
          position: relative;

          &:before {
            content: "•";
            color: #409EFF;
            position: absolute;
            left: -1.5rem;
          }
        }
      }
    }
  }
}

.education-item {
  h3 {
    color: #ffffff;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }

  .major {
    color: #409EFF;
    margin-bottom: 0.3rem;
  }

  .period {
    color: #a0a0a0;
  }
}

.self-evaluation {
  p {
    color: #a0a0a0;
    line-height: 1.8;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

// 响应式设计
@media screen and (max-width: 768px) {
  .about {
    padding: 1rem;

    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .section {
      padding: 1.5rem;
      margin-bottom: 1.5rem;

      h2 {
        font-size: 1.5rem;
      }

      .skills-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  }
}

// 平板设备
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .about {
    padding: 1.5rem;

    .section {
      padding: 1.8rem;
    }
  }
}

// 暗色主题
@media (prefers-color-scheme: dark) {
  .about {
    .profile-info {

      .basic-info,
      .introduction {
        background: rgba(64, 158, 255, 0.1);
      }
    }

    .skills-grid {
      .skill-category {
        background: rgba(64, 158, 255, 0.1);
      }
    }
  }
}
</style>