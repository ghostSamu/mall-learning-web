<template>
    <div>
        <el-card class="login-form-layout">
            <el-form onautocomplete="on"
                     :model="loginForm"
                     :rules="loginRules"
                     ref="loginForm"
                     label-position="left">
                <h2 class="login-title color-main">mall-admin-web</h2>
<!--                输入用户名-->
                <el-form-item prop="username">
                    <el-input name="username"
                              type = "text"
                              v-model = "loginForm.username"
                              placeholder = "请输入用户名">
                    </el-input>
<!--                    输入密码-->
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password"
                              type = "text"
                              v-model = "loginForm.password"
                              placeholder = "请输入密码">
                    </el-input>
<!--                    登陆按钮-->
                </el-form-item>
                <el-form-item prop="username">
                    <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
                        登陆
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return{
                loginForm: {
                    username: '',
                    password: '',
                },
                loginRules: {
                    username: '',
                    password: '',
                },
                loading: false
            }
        },
        created() {
          this.loginForm.username = '';
          this.loginForm.password = ''
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid){
                        this.loading = true;
                        this.$store.dispatch('login', this.loginForm).then(() => {
                            this.loading = false;
                            this.$router.push({path: '/'})
                        }).catch(() => {
                            this.loading = false
                        })
                    }else {
                        console.log("参数验证不合格");
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login-form-layout {
        position: absolute;
        left: 0;
        right: 0;
        width: 360px;
        margin: 140px auto;
        border-top: 10px solid #409EFF;
    }
</style>
