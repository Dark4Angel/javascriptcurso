// Exercise: tournament winner
/*
function tournamentWinner (competitions, results) {
  const scores = {}
  let winner = ''

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i]
    const winningTeam = results[i] === 0 ? away : home

    scores[winningTeam] = (scores[winningTeam] || 0) + 3
    
    if (!winner || scores[winningTeam] > scores[winner]) {
      winner = winningTeam
    }
  }

  return winner
}

const competitions = [
  ['JavaScript', 'C#'],
  ['C#', 'Python'],
  ['Python', 'JavaScript']
]

const results = [0, 0, 1]

console.log(tournamentWinner(competitions, results)) */



const competition=[
  ["Arsenal", "City"],
  ["Liverpool", "Arsenal"],
  ["City", "Liverpool"]
]
const results = [0, 0, 1]

let winnner = selectWinner()

function selectWinner (){
let ganadores = []
for(let i = 0 ; i< competition.length; i++){
  ganadores.push(competition[i][results[i]]);}
return ganadores
}
console.log(winnner)