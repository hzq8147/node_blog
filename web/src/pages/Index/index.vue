<template>
  <div id="main">
    <div>123</div>
  </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
import axios from "axios";
@Component({
  name:'Index'
})
export default class Index extends Vue {
    created(){
        axios.get("http://"+location.hostname+':3000/getNoteList').then(data=>{
            console.log(data);
        }).catch(e=>{
            console.log(e);
        })
    }
}
</script>
<style>
</style>
