<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <MiComponent title="Este es MiComponent dentro de Hello World" />
  </div>
</template>

<script>
import MiComponent from './MiComponent'
export default {
  name: 'HelloWorld',
  components: {
    MiComponent
  },
  props: {
    msg: String
  },
  data(){
    return {
      text: "Hola mundo desde el componente HelloWorld"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
