<template>
<div class="contact">
<Feature />
</div>
</template>

<script>
import Feature from '@/components/Feature.vue'
// import Newsletter from '@/components/Newsletter.vue'

export default {
    name: 'Contact',
    components: { Feature }
}
</script>

<style>
.contact {
    /* background-color: rgb(238, 238, 238); */
    border-radius: 20px;
    margin-left: 2rem;
    margin-right: 2rem;
}
</style>