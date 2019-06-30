<template>
    <section class="hero is-dark">
        <div class="hero-body">
            <div class="container">
                <center>
                    <img class="avatar" src="~assets/icon.jpg" width="256" draggable="false" />
                    <h1 class="title">{{ title }}</h1>
                    <h2 class="subtitle">{{ subtitle }}</h2>
                </center>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Hero',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.avatar {
    border-radius: 50%;
    border: 5px solid #FF69B4;
}
</style>