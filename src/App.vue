<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// 引入全局重置样式表
@import './stylesheet/reset.css';
#app,
html,
body {
  width: 100%;
  height: 100%;
}
</style>
