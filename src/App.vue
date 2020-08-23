<template>
  <div id="app">
        <Menu title_izq="Curso" title_dere="Vue" :list="['Inicio', 'Blog', 'Formulario', 'Pagina1', 'Pagina2']" />
        <Banner title_banner="Bienvenido al Curso de Vue con Anthony Tamayo Ortega" text_btn="IR AL BLOG" />
        <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components: {
    Menu,
    Banner,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import 'assets/css/styles.css';
</style>
