<template>
    <div class="banner">
        <img src="./img/img_banner.gif" class="img">
    </div>
</template>
<script lang="ts">
import {Vue,Component} from "vue-property-decorator";

@Component({
    name:'Banner'
})
export default class Banner extends Vue {

}
</script>
<style lang="less" scoped rel="stylesheet/less">
.banner{
    position: relative;
    height: 200px;
    border-bottom: 1px solid #222222;
    padding: 40px 60px 30px 60px;
    .img {
        position: absolute;
        bottom: 0;
        right: 80px;
        height: 80px;
        width: auto;
    }
}
</style>
