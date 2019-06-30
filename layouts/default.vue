<template>
    <div class="default">
        <navbar />
        <hero title="August (Chris)" subtitle="Hi! Welcome to my little bubble of the internet!" />
        <nuxt />
        <footer />
    </div>
</template>
<script>
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default {
    name: 'default',
    components: {
        'footer': Footer,
        'navbar': Navbar,
        'hero': Hero
    }
}
</script>