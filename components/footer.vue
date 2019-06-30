<template>
    <footer class="footer">
        <div class="content has-text-centered">
            Made with <b-icon id="heart" icon="heart" custom-size="mdi-18px" /> by auguwu
            Powered with <a href="https://vuejs.org">Vue</a>, <a href="https://nuxtjs.org">Nuxt</a>, and <a href="https://nodejs.org">Node</a>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'Footer'
}
</script>
<style scoped>
#heart {
    transition: color 0.25s ease;
}

#heart:hover {
    color: #FF3860;
}

a {
    transition: color 0.25s ease;
}

a:hover {
    color: #BA55D3;
}
</style>