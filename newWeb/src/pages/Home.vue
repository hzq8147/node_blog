<template>
    <div class="home">
        <home-background></home-background>
        <home-banner></home-banner>
        <snake></snake>
    </div>
</template>
<script setup>
import {HomeBanner,HomeBackground} from 'components/Home';
import Snake from 'components/Snake';
</script>
<style>
.home {
    position:relative;
    width:100%;
    height:100%;
    overflow: hidden;
}

</style>
