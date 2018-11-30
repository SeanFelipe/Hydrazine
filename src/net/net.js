const Promise = require('bluebird')


const REMOTE = 'http://api.football-data.org'
const LOCAL = 'http://localhost:3004'
//const futbolHost = LOCAL
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
      //console.log("initialDataCall() retrieved data: " + JSON.stringify(json))
      return json
    })
    .catch((error) => {
      console.log("initialDataCall() encountered error: " + error)
      throw error
    })
}


  /*
function dropoffUrl(studentId) {
  return `${cubaHost}/student/updateDropoff/${studentId}/`
}


export function sendDropoffUpdate(studentId, droppedOffByName) {
    console.log(`updating dropoff info for student: ${studentId} info: ${JSON.stringify(droppedOffByName)}`)

    const url = dropoffUrl(studentId)
    console.log("USDI url: " + url + " for name: " + droppedOffByName);

    return new Promise((resolve) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorzation': basicAuth(),
        },
        body: `droppedOffByName=${droppedOffByName}`
      })
        .then((response) => response.json())
        .then((json) => {
          console.log("sendDropoffUpdate response: " + json);
          console.log("sendDropoffUpdate keys: " + Object.keys(json));
          resolve(json)
      })
    })
}
*/
