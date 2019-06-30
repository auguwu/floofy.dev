<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item navbar-name" href="/">
                <img class="navbar-avatar" src="~assets/icon.jpg" />
            </a>
        </div>
        <div id="yeet" role="navigation" aria-label="main navigation">
            <div class="navbar-start">
                <a href="/" class="navbar-item">Home</a>
                <a href="https://discord.gg/7TtMP2n" class="navbar-item">Discord</a>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">More</a>
                    <div class="navbar-dropdown">
                        <hr class="navbar-divider" />
                        <a href="https://shipgirl.augu.dev" class="navbar-link">Yamashiro</a>
                        <a href="https://github.com/YamashiroBot/Yamashiro" class="navbar-link">Source Code</a>

                        <hr class="navbar-divider" />
                        <a href="https://nino.augu.dev" class="navbar-link">Nino</a>
                        <a href="https://github.com/auguwu/Nino" class="navbar-link">Source Code</a>
                    </div>
                </div> 
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
.navbar-avatar {
    width: 30px;
    height: 50px;
}

.navbar-name {
    font-family: 'Pacifico' cursive;
}
</style>