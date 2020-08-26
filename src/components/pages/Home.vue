<template>
  <div id="home" class="mt-3">
    <Section :title="data.title" :info="data.body" />
    <Sidebar titleSidebar="PUEDES HACER ESTO" btnArticle="Crear artículo" titleSearch="BUSCADOR" descriptionSearch="Encuentra el artículo que buscas" />
  </div>
</template>

<script>
import Section from '../section/Section'
import Sidebar from '../../components/aside/Sidebar.vue'
export default {
  name: 'Home',
  props: {
  },
  components: {
    Sidebar,
    Section
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.$http
      .get('https://gorest.co.in/public-api/posts')
      .then(response => (this.data = response.data.data[0]))
  }
}
</script>

<style lang="scss">
  #home {
    flex-direction: row;
    display: flex;
  }
</style>