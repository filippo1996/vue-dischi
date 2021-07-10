<template>
    <select @change="onChange">
        <option selected value="all">Tutti</option>
        <option v-for="(value, index) in values" :key="index" :value="value">{{value}}</option>
    </select>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
    name: 'Selector',
    data(){
        return {
            values: ''
        }
    },
    created(){
        eventBus.$on('items', (array) =>{
            this.values = array;
        });
    },
    methods: {
        onChange: function(event){
            eventBus.$emit('change', event.target.value);
        }
    }
}
</script>

<style>

</style>