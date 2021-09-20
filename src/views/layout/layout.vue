<template>
    <div class="app-wrapper">
        <Sidebar class="sidebar-container"></Sidebar>
        <div class="main-container">
            <Navbar></Navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
    import { AppMain, Sidebar, Navbar } from './components'

    export default {
        name: "layout",
        components: {AppMain, Sidebar, Navbar},
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            },
            device() {
                return this.$store.state.app.device
            },
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        }
    }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
 /*@import "src/styles/mixin";*/
 .app-wrapper {
     //@include clearfix;
     position: relative;
     height: 100%;
     width: 100%;
     /*background-color: #f9a7a7;*/
 }
</style>
