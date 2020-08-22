<template>
    <div class="mycomponent">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
    </div>
</template>

<script>
export default {
    name: "Mi componente",
    props: {
        title: String
        }, 
    data(){
        return {
            subtitle:"Este es el subtitulo de MiComponent"
        }
    }
}
</script>