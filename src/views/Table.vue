<template>
  <div class="players">
    <h1 class="font-mono text-lg text-gray-800 text-center">2021-22 Rotorink Hockey Projections</h1>
    <p class="mt-2 mb-2 text-blue-300 text-center">Stats provided by Rotowire</p>
     <h4 class="mt-2 mb-2">Click on skater or goalie name to view player chart</h4>

    <div class="inline-flex mt-2 mb-4">
     <button
        @click="current = 'Goalies'"
        class="cursor-not-allowed bg-gray-300 hover:bg-red-300 text-gray-800 font-bold py-2 px-4 rounded-l"
      >Goalies</button>
     <button
        @click="current = 'Players'"
        class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >Skaters</button>
    </div>

     <!--  <Players/> -->
    <component :is="current"></component>
  </div>
</template>

<script>
import Players from "@/components/Players.vue";
import Goalies from "@/components/Goalies.vue";

export default {
  name: "Table",
  data() {
    return {
      current: "Players"
    };
  },
  components: {
    Players,
    Goalies
  }
};
</script>

<style scoped>
</style>