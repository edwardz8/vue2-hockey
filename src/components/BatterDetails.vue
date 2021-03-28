<template>
  <div class="container mx-auto py-2">
    <div
      class="border m-6 rounded-lg bg-white mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden"
    >
      <div class="clearfix sm:flex sm:items-center px-12 py-4 hover:bg-gray-300">
        <p
          class="logo xl:float-left lg:float-left xl:mr-4 lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
        >
          <!-- <i :class="matchTeamLogo(batter.team)"></i> -->
        </p>
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="font-sans text-xl leading-tight mb-2">{{ batter.name }}</p>
            <p class="font-sans text-sm leading-tight text-grey-dark mb-2">
              {{ batter.team }}
            </p>
            <p class="font-sans text-sm leading-tight">
              AVG: {{ batter.batting_average }} - OBP: {{ batter.on_base_percentage }}
            </p>
            <p class="font-sans text-sm leading-tight">
              WAR: {{ batter.war }}
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
                All Batters
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="chart-container">
      <div v-if="$apollo.loading">Loading...</div>
      <div v-else>
        <batter-chart :chart-data="batter" :option="options" :styles="myStyles" />
      </div>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import gql from "graphql-tag";
import BatterChart from "./BatterChart.vue";

export default {
  name: "BatterDetails",
  components: { BatterChart },
  data() {
    return {
      batter: null,
      chartData: null,
      options: { responsive: true, maintainAspectRatio: false },
    };
  },
  methods: {
    ...methods,
  },
  apollo: {
    batter: {
      query() {
        return gql`
          query batter($id: String!) {
              batters: batters_by_pk(id: $id) {
                name
                id
                team
                at_bats
                batting_average
                plate_appearances
                runs_batted_in
                base_running
                caught_stealing
                offensive_runs_above_average
                defensive_runs_above_average
                hits
                doubles
                triples
                home_runs
                fielding_percentage
                runs
                strikeouts
                slugging_percentage
                walks
                stolen_bases
                on_base_percentage
                on_base_plus_slugging
                weighted_runs_created_plus
                games
                war
                adp
              }
          }
        `;
      },
      update: (data) => data.batter,
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
