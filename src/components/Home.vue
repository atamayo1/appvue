<template>
  <div id="home">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      title: "Bienvenidos a VueJS",
      subtitle: "VueJS subtitulo"
    }
  },

}
</script>

<style>

</style>