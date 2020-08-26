<template>
    <section id="content">
        <h1 class="title-error">{{ title }}</h1>
        <h2 class="subtitle-error">{{ subtitle }}</h2>
    </section>
</template>

<script>
export default {
    name: 'ErrorComponent',
    data(){
        return {
            title: 'Pagina no encontrada',
            subtitle: 'La página que buscas no existe, intentalo más tarde'
        }
    }
}
</script>

<style lang="scss">

</style>

