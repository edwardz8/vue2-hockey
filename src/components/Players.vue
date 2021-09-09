<template>
  <div class="container mx-auto">
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
                    Goals
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Position
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assists
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Points
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Shots
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Hits
                  </th>
                </tr>
              </thead>
                <div v-if="$apollo.loading" class="animate-pulse flex items-center w-100 space-x-4">
                  <div class="flex-1 space-y-4 py-1 w-100">
                    <div class="h-4 bg-blue-400 rounded w-100"></div>
                      <div class="h-4 bg-blue-400 rounded w-100"></div>
                      <div class="h-4 bg-blue-400 rounded w-100"></div>
                  </div>
                </div>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="player in players" :key="player.id">
                  <!-- :to="{ name: 'PlayerDetails', params: { id: player.id }}" -->
                  <router-link :to="`/player/${player.id}`">
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-5 w-5">
                          <!-- <i :class="matchTeamLogo(player.team)"></i> -->
                          <span> 🏒 </span>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ player.name }}
                          </div>
                        </div>
                      </div>
                    </td>
                  </router-link>
                  <td class="px-4 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ player.team }}</div>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-black-800"
                    >
                      {{ player.goals }}
                    </span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.position }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.assists }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.points }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.sog }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.hits }}
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
// import methods from '../../methods'

const GET_PLAYERS = gql`
  query players {
    players {
      name
      team
      position
      goals
      assists
      points
      sog
      hits
      games
      id
    }
  }
`;

export default {
  data() {
    return {
      players: [],
      loading: true,
    };
  },
  created() {
    console.log(players, "players");
  },
  /*  methods: {
    ...methods
  }, */
  apollo: {
    players: {
      query: GET_PLAYERS,
    },
  },
};
</script>

<style scoped></style>
