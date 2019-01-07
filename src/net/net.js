const Promise = require('bluebird')


const REMOTE = 'https://api.football-data.org'
const futbolHost = REMOTE
const INITIAL_URL = `${futbolHost}/v2/competitions/`
const CHAMPIONS_LEAGUE = `${futbolHost}/v2/competitions/CL/matches`
const TOP_SCORERS = `${futbolHost}/v2/competitions/SA/scorers`

const TARGET = TOP_SCORERS


export function initialDataCall() {
  const opts = {
    method: 'GET',
    headers: {
      'X-Auth-Token': 'b517a09f84124dd08ed8a3f4f851e345'
    }
  }

  return fetch(TARGET, opts)
    .then((response) => response.json())
    .then((json) => {
      console.log("initialDataCall() retrieved data: " + JSON.stringify(json))
      return json
    })
    .catch((error) => {
      console.log("initialDataCall() encountered error: " + error)
      throw error
    })
}
