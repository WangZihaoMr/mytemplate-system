<template>
  <div class="">
    <el-menu
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="$route.path"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!-- 没有子菜单 -->
      <el-menu-item :index="'/home'">
        <el-icon><setting /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <!-- 有子菜单的 -->
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/sys/users">
          <el-icon><icon-menu /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/sys/roles">
          <el-icon><icon-menu /></el-icon>
          <span>角色管理</span>
        </el-menu-item>
        <el-menu-item index="/sys/menus">
          <el-icon><icon-menu /></el-icon>
          <span>菜单管理</span>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="8">
        <template #title>
          <el-icon><location /></el-icon>
          <span>系统工具</span>
        </template>
        <el-menu-item index="/tool/dicts">
          <el-icon><icon-menu /></el-icon>
          <span>数字字典</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.el-menu {
  border: none;
}
</style>
