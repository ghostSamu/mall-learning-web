<template>
    <div class="menu-wrapper">
        <span v-for="item in routes" :key="item.components">
            <span v-if="item.children&&!item.hidden">
<!--                只显示首页？-->
                <router-link v-if="hasOneShowingChildren(item.children) && item.children.length === 1 " :to="item.path+'/'+item.children[0].path">
                    <el-menu-item :index="item.path+'/'+item.path" :class="{'submenu-title-noDropdown':!isNest}">
                        <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
                        <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                </router-link>

                <el-submenu v-else :index="item.name||item.path" :key="item.name">
                    <template slot="title">
                        <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
                        <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
                    </template>
                    <span v-for="child in item.children" :key="child.name">
                        <template v-if="!child.hidden">
                            <!-- 指定key，防止复用组件-->
                            <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="child" :key="child.path"></sidebar-item>
                            <!-- 指定key，防止复用组件-->
                            <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                                <el-menu-item :index="item.path+'/'+child.path">
                                    <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
                                    <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                                </el-menu-item>
                            </router-link>
                        </template>
                    </span>
                </el-submenu>
            </span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            },
            isNest: {
                type: Boolean,
                default: false
            }
        },
        computed: {

        },
        methods: {
            hasOneShowingChildren(children) {
                const showingChildren = children.filter(item => {
                    return !item.hidden
                })
                if (showingChildren.length === 1) {
                    return true
                }
                return false
            }
        }
    }
</script>
