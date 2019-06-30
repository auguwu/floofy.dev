<template>
    <div>
        <center>
            <h1 class="title">Projects</h1>
            <h2 class="subtitle">Projects that I maintain/develop</h2>
        </center>
        <div class="columns is-multiline">
            <div class="column is-4">
                <Project 
                    name="Yamashiro"
                    icon="https://shipgirl.augu.dev/favicon.ico"
                    shortDesc="Multifunctional Discord bot in the JDA library"
                    description="Yamashiro is a robust, multifunctional Discord bot made in the JDA library for small and big servers"
                />
            </div>
            <div class="column is-4">
                <Project 
                    name="Nino"
                    icon="https://nino.augu.dev/favicon.ico"
                    shortDesc="Robust moderation Discord bot for Discord's first hack week"
                    description="Nino is a Moderation Discord bot made in the Eris library for an entry of Discord's hack week"
                />
            </div>
            <div class="column is-4">
                <Project 
                    name="qtradio.moe"
                    icon="https://qtradio.moe"
                    shortDesc="J-Pop Radio Station"
                    description="qtradio.moe is a J-Pop radio station made by LiquidBlast, owned by ohlookitsderpy"
                />
            </div>
            <div class="column is-4">
                <Project 
                    name="Kashima"
                    icon="https://kashima.space/favicon.ico"
                    shortDesc="Music Player similar to MusicBee"
                    description="Kashima is a music player that is similar to MusicBee but customizable"
                />
            </div>
            <div class="column is-4">
                <Project 
                    name="Boats.NET"
                    icon="https://discord.boats/logo.bg.png"
                    shortDesc="Discord.Boats Client in C#"
                    description="Official discord.boats API wrapper for C#"
                />
            </div>
        </div>
    </div>
</template>
<script>
import Project from '../components/project';

export default {
    name: 'index',
    components: {
        Project
    }
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto|Lato|Montserrat&display=swap");

h1.title {
    font-family: 'Roboto' sans-serif;
    color: #2B2B2B;
}

p.subtitle {
    font-family: 'Montserrat' sans-serif;
    color: #999999;
}
</style>