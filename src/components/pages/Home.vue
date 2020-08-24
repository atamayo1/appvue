<template>
  <div id="home" class="mt-3">
    <Section title="Bienvenidos a VueJS" subtitle="VueJS subtitulo" />
    <Sidebar />
  </div>
</template>

<script>
import Section from '../section/Section'
import Sidebar from '../../components/aside/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Section
  },
}
</script>

<style lang="scss">
  #home {
    flex-direction: row;
    display: flex;
  }
</style>