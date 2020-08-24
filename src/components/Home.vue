<template>
  <div id="home">
    <h1 class="title-home">{{ title }}</h1>
    <h2 class="subtitle-home">{{ subtitle }}</h2>
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

<style lang="scss">

</style>