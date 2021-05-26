<template>
    <div id="main">
        <banner></banner>
    </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import Service from "./service";
import {Banner} from "components";
const service = new Service();
@Component({
    name:'Index',
    components:{
        Banner
    }
})
export default class HomeIndex extends Vue {
    noteList:any = [];
    created(){
        service.initPage(this);
    }
}
</script>
<style rel="stylesheet/less" scoped lang="less">

</style>
