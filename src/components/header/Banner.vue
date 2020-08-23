<template>
    <div id="banner">
        <h1 id="title-banner"><span>{{ title_banner }}</span></h1>
        <router-link :to="'/blog'" class="router-link">
            <button id="btn-banner" class="fw-500">{{ text_btn }}</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    props: {
        title_banner: String,
        text_btn: String
        }
}
</script>

<style scoped>
    #banner {
        background-color: #60c14d;
        height: 43vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        }
    #title-banner {
        color: white;
        text-shadow: 2px 2px 2px rgba(0,0,0,.3);
        }
    #btn-banner {
        align-self: center;
        width: 8vw;
        font-size: 14px;
        height: 7vh;
        border-radius: 5px;
        cursor: pointer;
        color: gray;
        }
    #btn-banner:hover {
        background-color: rgba(255,255,255,.5);
        border: none;
        }
    .router-link {
        color: black;
        text-decoration: none;
    }
    .router-link:hover{
        color: #60c14d;
        cursor: pointer;
    }
</style>