<template>
    <el-menu class="navbar" mode="horizontal">
        <Hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></Hamburger>
        <Breadcrumb></Breadcrumb>
        <el-dropdown class="avatar-container" trigger="click">
            <div class="avatar-wrapper">
                <img class="user-avatar" :src="avatar">
<!--                //向下的箭头-->
                <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu class="user-dropdown" slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item divided>
                    <span @click="logout" style="display:block;">退出</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'   //不是vue，是vuex啊  不然会报错
import Breadcrumb from '@/components/Breadcrumb';
import Hamburger from '@/components/Hamburger';


export default {
    name: "Navbar",
    components: {
        Breadcrumb,
        Hamburger
    },
    computed: {
        ...mapGetters([
            'sidebar',
            'avatar'
        ])
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('ToggleSideBar')
        },
        logout() {
            this.$store.dispatch('logout').then(() => {
                location.reload()   //重新实例化vue-router对象 避免bug
            })
        }
    }
    }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
.navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
        line-height: 58px;
        height: 50px;
        float: left;
        padding: 0 10px;
    }

    .screenfull {
        position: absolute;
        right: 90px;
        top: 16px;
        color: red;
    }
    .avatar-container {
        height: 50px;
        display: inline-block;
        position: absolute;
        right: 5px;
        .avatar-wrapper {
            cursor: pointer;
            margin-top: 5px;
            position: relative;
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }
        }
    }
}
</style>
