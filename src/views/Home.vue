<template>
  <div class="home">
    <HelloWorld msg="fungo fantasy baseball stats"/>
    <Pitchers />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Pitchers from '@/components/Pitchers.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Pitchers
  }
}
</script>
