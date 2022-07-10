//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var man_det = []
  man_det.push(managerName);
  man_det.push(managerAge);
  man_det.push(currentTeam);
  man_det.push(trophiesWon);
  return man_det
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {

  if (formation.length === 0) {
    return null;
  }

  var len = formation.length;

  if (len < 3) {
    for (let index = 0; formation.length === 3 ; index++) {
      formation.push(undefined)
    }
  }

  var formation_obj = {
    defender : formation[0],
    midfield : formation[1],
    forward : formation[2]
  }

  return formation_obj
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var player_debut = []

  for (const key in players) {
    if (players[key].debut === year) {
      player_debut.push(players[key])
    }   
  }

  return player_debut
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var player_pos = []

  for (const key in players) {
    if (players[key].position === position) {
      player_pos.push(players[key])
    }   
  }

  return player_pos
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award) {
  var player_pos = []

  for (const key in players) {
    for (const key1 in players[key].awards) {
        if (players[key].awards[key1].name === award) {
          player_pos.push(players[key])
        } 
      }
    }
  return player_pos
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(award, times) {
  var player_pos = []

  for (const key in players) {
    var time = 0
    for (const key1 in players[key].awards) {
        if (players[key].awards[key1].name === award) {
          time = time + 1
          if (time === times) {
            player_pos.push(players[key])
          }
        } 
      }
    }
  return player_pos
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(award, country) {
  var player_pos = []

  for (const key in players) {
    if (players[key].country === country) {
      for (const key1 in players[key].awards) {
        if (players[key].awards[key1].name === award) {
          player_pos.push(players[key])
        }
      } 
    }
  }
  return player_pos
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var player_pos = []

  for (const key in players) {
    var count = 0
    if (players[key].team === team && players[key].age < age) {
      for (const key1 in players[key].awards) {
        count ++
        if (count === noOfAwards) {
          player_pos.push(players[key])
        }
      } 
    }
  }
  return player_pos
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
