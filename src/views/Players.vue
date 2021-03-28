<template>
  <div class="players">
    <h1 class="font-mono text-lg text-gray-800 text-center">2021 Fungo Projections</h1>

    <div class="inline-flex mt-4">
      <button
        @click="current = 'Batters'"
        class="bg-gray-300 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded-l"
      >Batters</button>

      <button
        @click="current = 'Pitchers'"
        class="bg-gray-300 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded-r"
      >Pitchers</button>
    </div>

    <component :is="current"></component>
  </div>
</template>

<script>
import Batters from "@/components/Batters.vue";
import Pitchers from "@/components/Pitchers.vue";

export default {
  name: "Players",
  data() {
    return {
      current: "Batters"
    };
  },
  components: {
    Batters,
    Pitchers
  }
};
</script>

<style scoped>
</style>