// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'rotorink',
      // URL to the GraphQL API
      url: 'https://rotorink.hasura.app/v1/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}