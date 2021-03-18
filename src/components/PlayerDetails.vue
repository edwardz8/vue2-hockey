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
      <div v-else-if="pitcherlist">
        <chart :chartdata="chartdata" :options="options" :width="200" :height="300" />
      </div>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import gql from "graphql-tag";
import Chart from "./Chart.vue";
// import graphql2chartjs from 'graphql2chartjs';

export default {
  name: "PlayerDetails",
  components: { Chart },
  data() {
    return {
      pitcher: {},
      loaded: false,
      id: this.$route.params.id,
      chartdata: null
    };
  },
/*   async mounted () {
      this.loaded = false 
      const { pitcherlist } = await this.$apollo.pitcher
      this.chartdata = pitcherlist
      this.loaded = true
  }, */
  methods: {
    ...methods,
  },
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
          },
        `;
      },
      update: (data) => data.pitcher,
      variables() {
        return {
          id: this.id,
        };
      }
    },
/*     $subscribe: {
      pitcher: {
        query: pitcher,
        result({ data }) {
          // const g2c = new graphql2chartjs();
          // g2c.add(data, "bar");
          this.chartData = g2c.data;
          this.loaded = true;
          //console.log(g2c.data)
        }
      },
  } 
  
  below lines go after first query pitcher
  query {
              PitcherChart : pitcher {
                  id
                  player 
                  label: fip 
                  data: fip
              }
          }
  
  */
  }
};
</script>
