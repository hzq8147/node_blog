<template>
  <div id="main">
<!--    <router-view/>-->
    <div>12</div>
  </div>
</template>
<script lang="ts">
import { Component,Vue } from 'vue-property-decorator';
@Component({
  name:'App'
})
export default class App extends Vue {
}
</script>
<style>
html, body, #main {
  height: 100%;
  width: 100%;
}
</style>
