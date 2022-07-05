<template>
  <div class="header-container">
    <div class="header_top">
      <strong>VueAdmin后台管理系统</strong>
      <ul class="header-right">
        <li>
          <el-avatar shape="square" :size="36" :src="squareUrl" />
        </li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              test<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="single">个人中心</el-dropdown-item>
                <el-dropdown-item command="loginOut">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li>视频讲解</li>
        <li>网站</li>
      </ul>
    </div>
    <div class="header_bottom">22</div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()

// const squareUrl = store.getters.userInfo
const handleCommand = (command) => {
  if (command === 'single') {
    handleSingle()
  } else if (command === 'loginOut') {
    handleLoginOut()
  }
}
// 个人中心
const handleSingle = () => {}
// 退出登录
const handleLoginOut = () => {
  store.dispatch('user/clearAuthorization')
}
</script>

<style scoped lang="scss">
.header-container {
  height: 96px;
  // background-color: blueviolet;
  .header_top {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    background-color: #17b3a3;
    strong {
      flex: 1;
      line-height: 55px;
      text-align: center;
      color: #333;
    }
    .header-right {
      width: 212px;
      display: flex;
      li {
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 0 5px;
      }
    }
  }
  .header_bottom {
    height: 41px;
    background-color: gray;
  }
}
</style>
