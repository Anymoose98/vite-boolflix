<script>
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}

</script>


<template lang="">
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use './style/generals.scss'
</style>