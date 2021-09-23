<template>
    <section class="router">
        <div v-for="item in props.menuList">
            {{item}}
        </div>
    </section>
</template>
<script setup>
import {defineProps} from 'vue';
const props = defineProps({
    menuList:{
        type: Array,
        default: ['1']
    }
})
</script>

<style lang="less" scoped rel="stylesheet/less">
.router {
    width:100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding:30px 50px;


}
</style>