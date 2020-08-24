<template>
    <section class="content-home">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </section>
</template>

<script>
export default {
    name: "Section",
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style lang="scss">
    .content-home {
      display: flex;
      flex-direction: column;
      width: 75%;
    }
</style>