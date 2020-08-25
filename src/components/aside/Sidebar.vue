<template>
    <aside id="sidebar" class="w-25 pb-4 mr-3">
        <div id="nav-blog" class="sidebar-item mt-4">
            <p class="title-sidebar">{{ titleSidebar }}</p>
            <a href="#" class="btn btn-success">{{ btnArticle }}</a>
        </div>
        <div id="search" class="sidebar-item mt-5">
            <p class="title-search">{{ titleSearch }}</p>
            <p>{{ descriptionSearch }}</p>
            <form action="">
                <input type="text" name="search" class="w-75" /> <br>
                <input type="submit" name="submit" value="Buscar" class="btn btn-dark mt-3" />
            </form>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        titleSidebar: String,
        btnArticle: String,
        titleSearch: String,
        descriptionSearch: String
    },
}
</script>

<style lang="scss">
aside {
    background-color: #f5f5f5;
    #nav-blog {
        .title-sidebar {
            font-size: 1em;
            font-weight: 900;
        }
    }
    #search {
        .title-search {
            font-size: 1em;
            font-weight: 900;
        } 
    }
}  
</style>