const Promise = require('bluebird')


////////////////////////
// football-data.org
const REMOTE = 'https://api.football-data.org'
const futbolHost = REMOTE
const INITIAL_URL = `${futbolHost}/v2/competitions/`
const LEAGUE = 'CL'
const CHAMPIONS_LEAGUE = `${futbolHost}/v2/competitions/CL/matches`
//const TOP_SCORERS = `${futbolHost}/v2/competitions/SA/scorers`
const TOP_SCORERS = `${futbolHost}/v2/competitions/${LEAGUE}/scorers`
const DATA_TARGET = TOP_SCORERS


////////////////////////
// search
//const APIID_SEARCH_SERVER = 'http://localhost:9292'
const APIID_SEARCH_SERVER = 'http://searchy-server.herokuapp.com'
const APIID_SEARCH_ENDPOINT = '/getPlayerApiId'
const APIID_SEARCH = `${APIID_SEARCH_SERVER}${APIID_SEARCH_ENDPOINT}`


export function initialDataCall() {
  const opts = {
    method: 'GET',
    headers: {
      'X-Auth-Token': 'b517a09f84124dd08ed8a3f4f851e345'
    }
  }

  return fetch(DATA_TARGET, opts)
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

export function getPlayerApiId(textQuery) {
  console.log("getPlayerApiId with query: " + textQuery)

  const opts = {
    method: 'GET',
    headers: {
    }
  }

  const url = `${APIID_SEARCH}/${textQuery}`
  //const url = `${APIID_SEARCH_SERVER}/experiment`
  //const url = `${APIID_SEARCH_SERVER}/studentList`

  return fetch(url, opts)
    .then((response) => response.json())
    .then((json) => {
      console.log("getPlayerApiId() retrieved data: " + JSON.stringify(json))
      return json
    })
    .catch((error) => {
      console.log("getPlayerApiId() encountered error: " + error)
      throw error
    })
}
