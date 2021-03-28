<template>
  <div class="container mx-auto">
    <h1 class="mb-1">Batter Projections</h1>
    <h4 class="mb-4">Click on batters name to view more stats</h4>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Team
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ADP (Fantasy)
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    HR
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Ks
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hits
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SB
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="batter in batters" :key="batter.id">
                  <router-link :to="`/batter/${batter.id}`"
                  >
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-5 w-5">
                          <i :class="matchTeamLogo(batter.team)"></i>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ batter.name }}
                          </div>
                        </div>
                      </div>
                    </td>
                  </router-link>
                  <td class="px-4 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ batter.team }}</div>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      Active
                    </span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ batter.adp }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ batter.home_runs }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ batter.strikeouts }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ batter.hits }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ batter.stolen_bases }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import methods from '../../methods'

const GET_BATTERS = gql`
  query batters {
    batters {
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
      doubles 
      triples
      fielding_percentage
      runs
      hits
      strikeouts
      slugging_percentage
      hits
      walks
      home_runs
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

export default {
  data() {
    return {
      batters: [],
      loading: true,
    };
  },
  methods: {
    ...methods
  },
  apollo: {
    batters: {
      query: GET_BATTERS,
    },
  },
};
</script>

<style scoped></style>