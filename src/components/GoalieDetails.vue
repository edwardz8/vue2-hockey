<template>
  <div class="container mx-auto py-2">
    <div class="bg-white mx-auto max-w-lg overflow-hidden">
      <div
        class="clearfix sm:flex sm:items-center px-12 py-4 mx-2 rounded hover:bg-gray-200"
      >
        <p
          class="logo flex justify-content-center text-align-center align-items-center lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
        >
          <img
            class="goalie-img flex justify-content-center text-align-center align-items-center"
            :src="matchPlayerImage(goalie.name)"
          />
        </p>
        <div class="text-center sm:text-left sm:flex-grow" v-if="goalie">
          <div class="mb-4">
            <p class="font-sans text-xl leading-tight mb-2">{{ goalie.name }}</p>
            <p class="font-sans text-sm leading-tight text-grey-dark mb-2">
              {{ goalie.team }}
            </p>
            <p class="font-sans text-sm leading-tight">
              Wins: {{ goalie.wins }} - Losses: {{ goalie.games }}
            </p>
          </div>
          <div class="sm:flex sm:items-center flex-wrap">
            <router-link to="/">
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
        <chart-goalie :chart-data="goalie" :option="options" :height="280" />
      </div>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import gql from "graphql-tag";
import ChartGoalie from "./ChartGoalie.vue";

export default {
  name: "PlayerDetails",
  components: { ChartGoalie },
  data() {
    return {
      goalie: {},
      chartData: null,
      options: { responsive: false, maintainAspectRatio: false },
      height: 100,
    };
  },
  methods: {
    ...methods,
  },
  computed: {
    myStyles() {
      return {
        height: `${this.height}.px`,
        position: "relative",
      };
    },
  },
  apollo: {
    goalie: {
      query() {
        return gql`
          query goalie($id: Int!) {
            goalie: goalies_by_pk(id: $id) {
              name
              team
              games
              wins
              losses
              otl
              ga
              shots_allowed
              saves
              save_percentage
              so
              id
            }
          }
        `;
      },
      update: (data) => data.goalie,
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

<style>
.goalie-img {
  width: 180px;
  margin: 0 auto;
}
</style>
