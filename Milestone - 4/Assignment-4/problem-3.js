function bestTeam(player1, player2) {
  // You have to write your code here
  //Validation check

  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    Array.isArray(player1) !== false ||
    typeof player2 !== "object" ||
    typeof player1 !== "object" ||
    Array.isArray(player2) !== false
  ) {
    return "Invalid";
  }

  let teamOne = player1.foul + player1.cardY + player1.cardR;
  let teamtwo = player2.foul + player2.cardY + player2.cardR;

  if (teamOne < teamtwo) {
    return player1.name;
  } else if (teamOne > teamtwo) {
    return player2.name;
  } else {
    return "Tie";
  }
}

const player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const player2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

console.log(bestTeam(player1, player2));

const p1 = { name: "Germany", foul: 12, cardY: 0, cardR: 0 };
const p2 = { name: "Sweden", foul: 7, cardY: 4, cardR: 1 };

console.log(bestTeam(p1, p2));

const p3 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const p4 = { name: "France", foul: 10, cardY: 2, cardR: 1 };

console.log(bestTeam(p3, p4));

const p11 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const p12 = ["France"];

console.log(bestTeam(p11, p12));

const v1 = "Adittya";
const v2 = 100;

console.log(bestTeam(v1, v2));
