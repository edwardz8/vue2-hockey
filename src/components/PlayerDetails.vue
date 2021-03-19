<template>
  <div class="container mx-auto py-2">
    <div
      class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden"
    >
      <div class="clearfix sm:flex sm:items-center px-12 py-4 hover:bg-gray-300">
        <p
          class="logo xl:float-left lg:float-left xl:mr-4 lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
        >
          <i :class="matchTeamLogo(pitcher.team)"></i>
        </p>
        <div class="text-center sm:text-left sm:flex-grow" v-if="pitcher">
          <div class="mb-4">
            <p class="font-sans text-xl leading-tight mb-2">{{ pitcher.player }}</p>
            <p class="font-sans text-sm leading-tight text-grey-dark mb-2">
              {{ pitcher.team }}
            </p>
            <p class="font-sans text-sm leading-tight">
              Wins: {{ pitcher.wins }} - Innings: {{ pitcher.innings_pitched }}
            </p>
          </div>
          <div class="sm:flex sm:items-center flex-wrap">
            <button
              class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:text-black"
            >
              Track
            </button>
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
      <div v-if="!loaded">Loading...</div>
      <div>
        <!-- <chart v-if="loaded" :chartdata="chartData" :option="options" :width="100" :height="100" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import gql from "graphql-tag";
import Chart from "./Chart.vue";

export default {
  name: "PlayerDetails",
  components: { Chart },
  data() {
    return {
      pitcher: {},
      loaded: false,
      chartData: null,
      options: { responsive: true, maintainAspectRatio: false }
    };
  },
  methods: {
    ...methods,
  },
  /*  async mounted() {
    this.loaded = false 
    const { pitcherlist } = await this.$apollo.pitcher
    this.chartdata = pitcherlist
    this.loaded = true
  }, */
  apollo: {
    pitcher: {
      query() {
        return gql`
          query pitcher($id: String!) {
            pitcher: pitchers_by_pk(id: $id) {
              player
              id
              team
              wins
              strikeouts
              innings_pitched
              saves
              era
              hits
              walks
              walks_per_nine
              ks_per_nine
              home_runs_allowed
              games
              fip
              war
              adp
            }
          }
        `;
      },
      update: (data) => data.pitcher,
      variables() {
        return {
          id: this.$route.params.id,
        };
      },
      fetchPolicy: 'cache-and-network'
    }
  },
};
</script>
