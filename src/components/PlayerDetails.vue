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
      <div v-else-if="loaded">
        <chart :chartdata="chartdata" :options="options" :width="200" :height="300" />
      </div>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import gql from "graphql-tag";
import Chart from "./Chart.vue";
// import graphql2chartjs from "graphql2chartjs";

export default {
  name: "PlayerDetails",
  components: { Chart },
  data() {
    return {
      pitcher: {},
      loaded: false,
      id: this.$route.params.id,
      chartdata: null,
/*       options: {
        chart: {
          polarArea: true,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        pane: {
          startAngle: 0,
          endAngle: 360,
        },
        xAxis: {
          tickInterval: 20,
          min: 0,
          max: 260,
          labels: {
            format: "{value}",
          },
        },
        yAxis: {
          min: 0,
        },
        plotOptions: {
          series: {
            pointStart: 0,
            pointInterval: 20,
          },
          column: {
            pointPadding: 0,
            groupPadding: 0,
          },
        },
        series: [
          {
            type: "column",
            name: "Wins",
            data: pitcher.wins,
            pointPlacement: "between",
          },
          {
            type: "line",
            name: "Innings Pitched",
            data: pitcher.innings_pitched,
          },
          {
            type: "area",
            name: "Strikeouts",
            data: pitcher.strikeouts,
          },
        ],
        responsive: true,
        maintainAspectRatio: true,
      }, */
    };
  },
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
          }
        `;
      },
      update: (data) => data.pitcher,
      variables() {
        return {
          id: this.id,
        };
      },
    },
/*     $subscribe: {
      pitcher: {
        query: pitcher,
        result({ data }) {
          const g2c = new graphql2chartjs();
          g2c.add(data, "polarArea");
          this.chartdata = g2c.data 
          this.loaded = true 
          console.log(g2c.data, 'g2c data')
        },
      },
    }, */
  },
};
</script>
