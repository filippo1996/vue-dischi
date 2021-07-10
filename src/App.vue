<template>
  <div id="app">
    <Header/>
    <main>
      <ModelGridLayout :items="filter"/>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ModelGridLayout from './components/ModelGridLayout.vue';
import Axios from './axios.js';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  components: {
    Header,
    ModelGridLayout,
  },
  data(){
    return {
      discs: [],
      nameFilter: ''
    }
  },
  async created(){
    let disc = await Axios('https://flynn.boolean.careers/exercises/api/array/music');
    //Ordiniamo l'array in base all'anno più recente dell'uscita del disco
    let orderYearDisc = disc.data.response.sort((a , b) => b.year - a.year);
    this.discs = orderYearDisc;

    //Invio risposta event bus al componente
    const genre = new Set(this.discs.map(obj => obj.genre));
    eventBus.$emit('items', genre);

    //Ritorno risposta event bus dal componente
    eventBus.$on('change', ele => this.nameFilter = ele);
  },
  computed:{
    filter(){
      if(!this.nameFilter) return this.discs;
      if(this.nameFilter === 'all') return this.discs;
      return this.discs.filter(obj => obj.genre === this.nameFilter);
    }
  }
}
</script>

<style lang="scss">
@import '@/style/commons.scss';

</style>
