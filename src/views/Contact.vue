<template>
  <div class="contact">
    <div class="container">
      <h1 class="title">联系方式</h1>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <el-icon>
              <Message />
            </el-icon>
            <div class="info-content">
              <h3>邮箱</h3>
              <p @click="copyText('1870542488@qq.com')" class="copyable">1870542488@qq.com</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon>
              <Phone />
            </el-icon>
            <div class="info-content">
              <h3>电话</h3>
              <p @click="copyText('19977957772')" class="copyable">19977957772</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon>
              <ChatDotRound />
            </el-icon>
            <div class="info-content">
              <h3>微信</h3>
              <p @click="copyText('b1870542488')" class="copyable">b1870542488</p>
            </div>
          </div>

          <div class="info-item">
            <el-icon>
              <Position />
            </el-icon>
            <div class="info-content">
              <h3>GitHub</h3>
              <a href="https://github.com/BonnyBing" target="_blank">Github主页</a>
            </div>
          </div>

          <div class="info-item">
            <el-icon>
              <Link />
            </el-icon>
            <div class="info-content">
              <h3>技术博客</h3>
              <a href="https://blog.csdn.net/qq_36181045?spm=1000.2115.3001.5343"
                target="_blank">CSDN主页</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message, Phone, ChatDotRound, Position, Link } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const copyText = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    ElMessage({
      message: '复制成功',
      type: 'success',
      duration: 2000
    })
  } catch (err) {
    ElMessage({
      message: '复制失败',
      type: 'error',
      duration: 2000
    })
  }
}
</script>

<style scoped lang="scss">
.contact {
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

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .contact-info {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h2 {
      color: var(--text-color);
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 0.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      color: #666;

      .el-icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        color: var(--primary-color);
      }

      a {
        color: var(--primary-color);
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
          color: #36cfc9;
        }
      }
    }
  }

  .contact-form {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h2 {
      color: var(--text-color);
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      border-bottom: 2px solid var(--primary-color);
      padding-bottom: 0.5rem;
    }

    .form-item {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-color);
      }

      .el-input,
      .el-textarea {
        width: 100%;
      }
    }

    .submit-btn {
      width: 100%;
      margin-top: 1rem;
    }
  }
}

// 响应式设计
@media screen and (max-width: 768px) {
  .contact {
    padding: 1rem;

    .title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .contact-info,
    .contact-form {
      padding: 1.5rem;

      h2 {
        font-size: 1.5rem;
      }
    }
  }
}

// 平板设备
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .contact {
    padding: 1.5rem;

    .contact-grid {
      gap: 1.8rem;
    }
  }
}

// 暗色主题
@media (prefers-color-scheme: dark) {
  .contact {

    .contact-info,
    .contact-form {
      background: #242424;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

      .info-item {
        color: #a0a0a0;
      }
    }
  }
}
</style>