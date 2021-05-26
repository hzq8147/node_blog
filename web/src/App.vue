<template>
  <div id="main">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
@Component({
  name:'App',
  components:{
  }
})
export default class App extends Vue {
}
</script>
<style>
html, body, #main {
    height: 100%;
    width: 100%;
    margin:0;
}
</style>
