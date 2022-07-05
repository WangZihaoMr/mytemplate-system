<template>
  <div class="layout-container">
    <div class="aside-wrapper">
      <AsideBar></AsideBar>
    </div>
    <div class="main-wrapper">
      <App-Main></App-Main>
    </div>
  </div>
</template>

<script setup>
import AppMain from './AppMain'
import AsideBar from './AsideBar'
</script>

<style scoped lang="scss">
.layout-container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: pink;
  .aside-wrapper {
    width: 200px;
    height: 100%;
    overflow-y: auto;
    border: none;
    background-color: #545c64;
    ::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
  .main-wrapper {
    width: calc(100% - 200px);
  }
}
</style>
