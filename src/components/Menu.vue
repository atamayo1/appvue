<template>
    <div id="menu">
        <nav>
            <div class="content-logo">
                <li><img id="logo" alt="Vue logo" src="../assets/logo.png"></li>
                <li id="title-logo"><strong class="fw-900">{{ title_izq }}</strong>{{ title_dere }}</li>
            </div>
            <div class="content-pages">
                <li class="item-by-list" v-for="item of list" :key="item">{{ item }}</li>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        title_izq: String,
        title_dere: String,
        list: {
             type: Array,
             default: () => []
        }
    },
}
</script>

<style scoped>
    #menu {
        border-top: 5px solid #60c14d;
        }
    .item-by-list:hover {
        color: #60c14d;
        cursor: pointer;
        }   
    #logo {
        width: 4vw;
        }
    #title-logo {
        font-size: 20px;
        }
    nav {
        margin: 3vh 14vw;
        list-style: none;
        display: flex;
        flex: 1;
        justify-content: space-between;
        }     
    .content-logo {
        display: flex;
        align-items: center;
        }
    .content-pages {
        display: flex;
        align-items: center;
        }
    .content-pages li {
        margin: 0 1vw;
        }
</style>