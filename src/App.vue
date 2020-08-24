<template>
  <div id="app">
        <Menu title_izq="Curso" title_dere="Vue" :list="[{name:'Inicio', link:'/home'}, {name:'Blog', link:'/blog'}, {name:'Formulario', link:'/formulario'}, {name:'Pagina1', link: '/pagina1'}, {name:'Pagina2', link:'/pagina2'}]" />
        <Banner title_banner="Bienvenido al Curso de Vue con Anthony Tamayo Ortega" text_btn="IR AL BLOG" />
        <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/header/Menu.vue'
import Banner from './components/header/Banner.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Banner,
  }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
@import 'assets/scss/styles.scss';
</style>
