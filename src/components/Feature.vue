<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
        <p class="mt-4 text-gray-500">Prosper in your fantasy leagues and apps with articles on betting, lineup and season-long fantasy advice.</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="../assets/hockey/UFOBag.svg" alt="hockey" class="bg-gray-100 rounded-lg" />
        <img src="../assets/hockey/Connor_Mcdavid.svg" alt="hockey" class="bg-gray-100 rounded-lg" />
        <img src="../assets/hockey/PlumbersJersey.svg" alt="hockey" class="bg-gray-100 rounded-lg" />
        <img src="../assets/hockey/Skates-Retro-Pink-2.svg" alt="hockey" class="bg-gray-100 rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      features: [
    { name: 'Daily Fantasy Lineups', description: 'FanDuel and DraftKings top plays 📱' },
    { name: 'Parlays', description: 'Stringing together high-percentage combos for 💰' },
    { name: 'Player & Team Props', description: 'Player and future props and parlays ⛸️' },
    { name: 'Prospects', description: 'Keep up with future stars 🏒' },
    { name: 'Dynasty Hockey', description: 'Season-long and dynasty league hockey articles 🥅' },
    { name: 'Player News', description: 'Trending player updates 💻' },
  ]
    }
  },
}
</script>