<template>
  <div class="container mx-auto">
    <div class="relative text-gray-800 ml-4 mr-4 flex mb-2">
      <input v-model="searchQuery" type="search" name="serch" placeholder="Goalie Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
      <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
        <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
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
                    Wins
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Losses
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Goals Allowed
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Saves
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Save %
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Shutouts
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
                <tr v-for="player in sortedPlayers" :key="player.id">
                  <!-- :to="{ name: 'PlayerDetails', params: { id: player.id }}" -->
                  <router-link :to="`/goalie/${player.id}`">
                    <td class="px-4 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-5 w-5">
                          <!-- <i :class="matchTeamLogo(player.team)"></i> -->
                          <span> 🥅 </span>
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
                      {{ player.wins }}
                    </span>
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.losses }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.ga }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.saves }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.save_percentage }}
                  </td>
                  <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ player.so }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
     <!--  <div class="container mx-auto flex justify-content-center">
        <button @click="prevPage">Previous</button> 
        <button @click="nextPage">Next</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GET_GOALIES = gql`
  query goalies {
    goalies {
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

export default {
  data() {
    return {
      goalies: [],
      searchQuery: null,
      loading: true,
    };
  },
  created() {
    console.log(goalies, "goalies");
  },
  apollo: {
    goalies: {
      query: GET_GOALIES,
    },
  },
  computed: {
    sortedPlayers() {
      if (this.searchQuery) {
        return this.goalies.filter(p => {
          return this.searchQuery.toLowerCase().split(" ").every(v => p.name.toLowerCase().includes(v))
        })
      } else {
        return this.goalies
      }
    }
  }
};
</script>

<style scoped></style>
