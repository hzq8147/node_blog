<template>
    <div id="main">
        <router-view></router-view>
    </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<style>
html, body, #main {
    height: 100%;
    width: 100%;
    margin:0;
}
</style>
