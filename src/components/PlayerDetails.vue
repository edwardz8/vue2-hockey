<template>
  <div class="container mx-auto py-2">
    <div
      class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden"
    >
      <div class="clearfix sm:flex sm:items-center px-12 py-4 hover:bg-gray-300">
        <p
          class="logo xl:float-left lg:float-left xl:mr-4 lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
        >
          <!-- <i :class="matchTeamLogo(player.team)"></i> -->
        </p>
        <div class="text-center sm:text-left sm:flex-grow" v-if="player">
          <div class="mb-4">
            <p class="font-sans text-xl leading-tight mb-2">{{ player.name }}</p>
            <p class="font-sans text-sm leading-tight text-grey-dark mb-2">
              {{ player.team }}
            </p>
            <p class="font-sans text-sm leading-tight">
              Goals: {{ player.goals }} - Assists: {{ player.assists }}
            </p>
          </div>
          <div class="sm:flex sm:items-center flex-wrap">
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:text-black"
            >
              Track
            </button>
            <router-link to="/players">
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:text-black"
              >
                All Players
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="chart-container">
      <div v-if="$apollo.loading">Loading...</div>
      <div v-else>
        <chart :chart-data="player" :option="options" :height="300" />
      </div>
    </div>
  </div>
</template>

<script>
// import methods from "../../methods";
import gql from "graphql-tag";
import Chart from "./Chart.vue";

export default {
  name: "PlayerDetails",
  components: { Chart },
  data() {
    return {
      player: {},
      chartData: null,
      options: { responsive: true, maintainAspectRatio: false },
      height: 100,
    };
  },
  /* methods: {
    ...methods,
  }, */
  computed: {
    myStyles() {
      return {
        height: `${this.height}.px`,
        position: "relative",
      };
    },
  },
  apollo: {
    player: {
      query() {
        return gql`
          query player($id: Int!) {
            player: players_by_pk(id: $id) {
              name
              id
              team
              goals
              assists
              points
              sog
              hits
            }
          }
        `;
      },
      update: (data) => data.player,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      fetchPolicy: "cache-and-network",
    },
  },
};
</script>
