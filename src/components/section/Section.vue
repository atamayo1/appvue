<template>
    <section class="container">
      <h1 class="title text-left">{{ title }}</h1>
      <h2 class="subtitle text-left">{{ subtitle }}</h2>
      <p class="text-left">
          {{ info }}
      </p>
    </section>
</template>

<script>
export default {
    name: "Section",
    props: {
        title: String,
        subtitle: String,
        info: String
    }
}
</script>

<style lang="scss">
   
</style>