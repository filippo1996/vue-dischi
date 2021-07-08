<template>
  <div id="app">
    <Header/>
    <main>
      <ModelGridLayout :items="discs"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ModelGridLayout from './components/ModelGridLayout.vue';
import Axios from './axios.js';

export default {
  name: 'App',
  components: {
    Header,
    ModelGridLayout,
  },
  data(){
    return {
      discs: []
    }
  },
  async created(){
    let disc = await Axios('https://flynn.boolean.careers/exercises/api/array/music');
    this.discs = disc.data.response;
  }
}
</script>

<style lang="scss">
@import '@/style/commons.scss';

</style>
