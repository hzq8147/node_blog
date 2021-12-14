<template>
    <section class="banner">
        <div class="text">{{count}}</div>
        <div class="text">{{countCompute}}</div>
        <home-router :menuList="a"></home-router>
        <img @click="handleClick"  src="./img/img_banner.gif" class="img">
    </section>
</template>
<script setup lang="ts">
import HomeRouter from '../HomeRouter';
import {ref,computed,reactive} from 'vue';
const count = ref(0);
const a = reactive(["1","2","3"]);
const countCompute = computed(()=>{
    return count.value * 2;
})
const handleClick =()=>{
    count.value ++;
    a[a.length - 1] = count.value;
}
</script>
<style lang="less" scoped rel="stylesheet/less">
.banner{
    position: relative;
    height: 100px;
    border-bottom: 1px solid #222222;
    padding: 40px 60px 30px 60px;
    .text {
        font-size: 30px;
    }
    .img {
        position: absolute;
        bottom: 0;
        right: 80px;
        height: 80px;
        width: auto;
        mix-blend-mode: multiply;
    }
}
</style>
