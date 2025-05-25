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
              <a href="https://github.com/BonnyBing" target="_blank">https://github.com/BonnyBing</a>
            </div>
          </div>

          <div class="info-item">
            <el-icon>
              <Link />
            </el-icon>
            <div class="info-content">
              <h3>技术博客</h3>
              <a href="https://blog.csdn.net/qq_36181045?spm=1000.2115.3001.5343"
                target="_blank">https://blog.csdn.net/qq_36181045?spm=1000.2115.3001.5343</a>
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

<style lang="scss" scoped>
.contact {
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

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-info {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;

  .info-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }

    .el-icon {
      font-size: 1.5rem;
      color: #409EFF;
      margin-right: 1rem;
      margin-top: 0.25rem;
    }

    .info-content {
      h3 {
        color: #ffffff;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      p,
      a {
        color: #a0a0a0;
        text-decoration: none;
        font-size: 1.1rem;

        &:hover {
          color: #409EFF;
        }
      }

      .copyable {
        cursor: pointer;
        position: relative;

        &:hover::after {
          content: '点击复制';
          position: absolute;
          right: -60px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 0.8rem;
          color: #409EFF;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>