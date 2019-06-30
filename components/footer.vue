<template>
    <footer class="footer">
        <div class="content is-dark has-text-centered">
            Made with <b-icon id="heart" icon="heart" custom-size="mdi-18px" /> by auguwu 
            <br />
            Powered with <a href="https://vuejs.org">Vue</a>, <a href="https://nuxtjs.org">Nuxt</a>, and <a href="https://nodejs.org">Node</a>
            <br />
            <a href="https://github.com/auguwu/augu.dev"><b-icon id="github" icon="github-square" custom-size="mdi-18px" /> Source Code</a> | <a href=""> <b-icon id="discord" icon="discord" custom-size="mdi-18px" /> Discord Server</a>
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

#github {
    color: #333333;
}

#discord {
    color: #7289DA;
}
</style>