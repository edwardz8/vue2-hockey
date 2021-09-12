<template>
<div>
    <Form/>
    <div class="contact">
    <Feature />
    </div>
</div>
</template>

<script>
import Feature from '@/components/Feature.vue'
import Form from '@/components/Form.vue'

export default {
    name: 'Contact',
    components: { Feature, Form }
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