<template>
    <div class="map" ref="mapRef">
        <canvas id="snake"></canvas>
    </div>
</template>
<script setup>
import {reactive, defineProps, ref, nextTick, onMounted} from 'vue';
const map = reactive([]);
defineProps({
    width:{
        type: String,
        default:'500px'
    },
    height:{
        type: String,
        default:'500px'
    },
})
const mapRef = ref(null);
onMounted(()=>{
    initMap();
    paintSnake();
})
const initMap = ()=>{
    if (!mapRef.value) return;
    let trueHeight = mapRef.value.clientHeight;
    let trueWidth = mapRef.value.clientWidth;

}

const paintSnake = ()=>{
    let canvas = document.getElementById('snake');
    let context = canvas.getContext('2d');
    context.strokeStyle = 'pink';
    context.lineTo(200, 200);
    context.lineTo(200, 100);
    context.lineTo(100,50);
    context.stroke();
}

</script>
<style scope lang="less" rel="styleSheet/less">
.map {
    width:v-bind('width');
    height:v-bind('height');
    border:1px solid black;
}
</style>