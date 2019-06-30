<template>
    <div class="default" style="margin: 0;">
        <hero title="August (Chris)" subtitle="Full-stack Developer in the United States" />
        <nuxt />
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/footer';
import Hero from '../components/hero';

export default {
    name: 'default',
    components: {
        Footer,
        'hero': Hero
    }
}
</script>