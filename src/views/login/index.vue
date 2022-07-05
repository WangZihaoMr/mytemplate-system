<template>
  <div class="login-container">
    <div class="loginForm">
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        size="large"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model.trim="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="loginForm.password" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input class="code_input" v-model.trim="loginForm.code"></el-input>
          <el-image :src="codeUrl" @click="handleGetCode" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button>获取密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import UserApi from '../../api/user'
// import { removeItem } from '../../utils/storage'
const store = useStore()
const router = useRouter()

const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})

// console.log(loginForm)

const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const loginFormRef = ref()
const codeUrl = ref()
// 获取验证码
const handleGetCode = async () => {
  const codeData = await store.dispatch('user/getCode')
  codeUrl.value = codeData.data.captchaImg
  loginForm.token = codeData.data.token
}
// 首次加载Code码
handleGetCode()

// 登录提交
const handleSubmit = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    if (valid) {
      console.log(loginForm, 'loginForm')
      const userLoginData = await UserApi.userLogin(loginForm)
      if (!userLoginData) return
      const userInfoData = await store.dispatch('user/userInfo')
      console.log(userInfoData)
      router.push('/layout')
    }
  })
}
</script>

<style scoped lang="scss">
.login-container {
  position: relative;
  height: 100%;
  background-color: #fafafa;
  .loginForm {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 380px;
    height: 250px;
    margin-left: -190px;
    margin-top: -125px;
  }
}
::v-deep(.el-input__inner) {
  height: 40px;
}
::v-deep .code_input {
  width: 130px !important;
}
::v-deep .content-code {
  display: flex;
  justify-content: space-between;
}
.code-wrapper {
  width: 200px;
  height: 40px;
  background-color: pink;
}
</style>
