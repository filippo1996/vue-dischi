<template>
    <div class="card">
        <div v-show="!loaded" class="loader"></div>
        <img v-show="loaded" :src="content.poster" class="card-img-top" :alt="content.title" @load="loading">
        <div class="card-body">
            <h5 class="card-title">{{content.title}}</h5>
            <p class="card-text">{{content.author}}</p>
            <p class="card-text">{{content.year}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        content: Object
    },
    data(){
        return {
            loaded: false,
        }
    },
    methods:{
        loading: function(){
            this.loaded = true;
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/style/var.scss';

.card{
    flex-direction: column;
    background: $primaryColor;
    width: 10rem;
    padding: 15px;
    cursor: pointer;
    height: 350px;
}

.card-title{
    color: white;
    text-align: center;
}

.card-text{
    text-align: center;
    color: $lightGray;
}
</style>