<template>
    <div class="bg">
        <div class="filter"></div>
        <canvas id="bg"></canvas>
    </div>    
</template>
<script setup>
import { onBeforeUnmount, onMounted } from 'vue';
import Bg from './Bg';
onMounted(()=>{
    const canvas = document.getElementById('bg');
    const bg = new Bg(canvas);
    bg.init();
    window.onresize=()=>{
        bg.init();
    }
})
onBeforeUnmount(()=>{
    window.onresize=()=>{};
})

</script>
<style lang="less" rel="stylesheet/less">
.bg{
    background: linear-gradient(to bottom,#f7f7f7 0%, rgb(226, 104, 145) 100%);
    width:100%;
    height:100%;
    overflow: hidden;
    position: absolute;
    top:0;
    left:0;
    z-index:-1;
    .filter {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: #fe5757;
        animation: colorChange 5s ease-in-out infinite;
        animation-fill-mode: both;
        mix-blend-mode: overlay;
    }
    @keyframes colorChange {
        0%, 100% {
            opacity: 0;
        }
        50% {
            opacity: .5;
        }
        }
}
</style>