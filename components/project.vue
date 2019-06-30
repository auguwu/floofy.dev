<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <figure class="image is-48x48">
                    <img :src="icon" alt="icon" />
                </figure>
                <div class="media-content">
                    <p class="title is-4">{{ name }}</p>
                    <p class="subtitle is-6">{{ shortDesc }}</p>
                </div>
            </div>
        </div>
        <div class="content">
            {{ description }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'Project',
    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        shortDesc: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>