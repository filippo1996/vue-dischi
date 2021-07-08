<template>
    <section class="my-5">
        <div class="container">
            <div class="row gy-4">
                <div v-for="(item, index) in items" :key="index" class="col">
                    <Card :content="item"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'ModelGridLayout',
    components: {
        Card,
    },
    props: {
        items: Array
    }
}
</script>

<style scoped lang="scss">

</style>