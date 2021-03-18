import gql from 'graphql-tag'

export const PITCHER_QUERY = gql `query pitcher($id: Int!) {
    pitcher(id: $id) {
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
`