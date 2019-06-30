<template>
    <div class="default">
        <navbar />
        <hero title="Unknown Error" subtitle="An error occured! Revert back to the homepage." />
        <footer />
    </div>
</template>
<script>
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default {
    name: 'error',
    components: {
        'footer': Footer,
        'navbar': Navbar,
        'hero': Hero
    }
}
</script>