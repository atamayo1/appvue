<template>
    <div id="menu">
        <nav>
            <router-link :to="'/'" class="router-link">
                <div class="content-logo">
                    <li><img id="logo" alt="Vue logo" src="../../assets/logo.png"></li>
                    <li id="title-logo"><strong class="fw-900">{{ title_izq }}</strong>{{ title_dere }}</li>
                </div>
            </router-link>
            <div class="content-pages">
                <li class="item-by-list" v-for="item of list" :key="item"><router-link :to="item.link" class="router-link">{{ item.name }}</router-link></li>
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

<style lang="scss">
    #menu {
        border-top: 5px solid #60c14d;
        height: 14vh;
        nav {
            margin: 3vh 14vw;
            list-style: none;
            display: flex;
            flex: 1;
            justify-content: space-between;
            .router-link {
                color: black;
                text-decoration: none;
            }
            .router-link:hover{
                color: #60c14d;
                cursor: pointer;
            }
            .content-logo {
                display: flex;
                align-items: center;
                #logo {
                    width: 4vw;
                }
                #title-logo {
                    font-size: 20px;
                }
            }
            .content-pages {
                display: flex;
                align-items: center;
                li {
                    margin: 0 1vw;
                }
            }
        } 
    }
</style>