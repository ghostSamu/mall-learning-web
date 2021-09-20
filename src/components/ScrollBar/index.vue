<template>
    <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll"> //wheel 鼠标滚轮事件 禁止页面滚动
<!--        sidebar 上半部分（有字的）-->
        <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    const delta = 15

    export default {
        name: "scrollBar",
        data() {
            return {
                top: 0
            }
        },
        methods: {
            //计算元素的top高度
            handleScroll(e) {
                const eventDelta = e.wheelDelate || -e.deltaY * 3
                const $container = this.$refs.scrollContainer //ref 用来获取组件实例
                const $containerHeight = $container.offsetHeight
                const $wrapper = this.$refs.scrollWrapper
                const $wrapperHeight = $wrapper.offsetHeight
                if (eventDelta >0) {
                    this.top = Math.min(0,this.top + eventDelta)
                }else {
                    if ($containerHeight - delta < $wrapperHeight) {
                        if (this.top < -($wrapperHeight - $containerHeight + delta)) {
                            this.top = this.top
                        }else {
                            this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight -delta)
                        }
                    }else {
                        this.top = 0
                    }
                }
            }
        }
    }
</script>

<style ref="stylesheet/scss" lang="scss" scoped>
@import "../../styles/variables.scss";

.scroll-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: $menuBg;
     .scroll-wrapper {
         position: absolute;
         width: 100%!important;
     }
}
</style>
