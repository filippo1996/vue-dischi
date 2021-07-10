<template>
    <header>
        <nav class="navbar navbar-light bg_primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="logo" src="../assets/img/logo.png" alt="logo Spotify"></a>
                <Selector/>
            </div>
        </nav>
    </header>
</template>

<script>
import Selector from './Selector.vue'

export default {
    name: 'Header',
    components: {
        Selector
    }
}
</script>

<style scoped lang="scss">
@import '@/style/var.scss';

.bg_primary{
    background: $primaryColor;
}

.logo{
    width: 100px;
}
</style>