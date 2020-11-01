import "./styles.css";

document.getElementById("board").innerHTML = `
<p id="player">Player 1</p>
<table style="width: 30%;">
<tr>
  <th id="11" onclick="myFunction(this)">-</th>
  <th id="12" onclick="myFunction()">-</th>
  <th id="13" onclick="myFunction()">-</th>
  <th id="14" onclick="myFunction()">-</th>
  <th id="15" onclick="myFunction()">-</th>
</tr>
<tr>
  <th id="21" onclick="myFunction()">-</th>
  <th id="22" onclick="myFunction()">-</th>
  <th id="23" onclick="myFunction()">-</th>
  <th id="24" onclick="myFunction()">-</th>
  <th id="25" onclick="myFunction()">-</th>
</tr>
<tr>
  <th id="31" onclick="myFunction()">-</th>
  <th id="32" onclick="myFunction()">-</th>
  <th id="33" onclick="myFunction()">-</th>
  <th id="34" onclick="myFunction()">-</th>
  <th id="35" onclick="myFunction()">-</th>
</tr>
<tr>
  <th id="41" onclick="myFunction()">-</th>
  <th id="42" onclick="myFunction()">-</th>
  <th id="43" onclick="myFunction()">-</th>
  <th id="44" onclick="myFunction()">-</th>
  <th id="45" onclick="myFunction()">-</th>
</tr>
<tr>
  <th id="51" onclick="myFunction()">-</th>
  <th id="52" onclick="myFunction()">-</th>
  <th id="53" onclick="myFunction()">-</th>
  <th id="54" onclick="myFunction()">-</th>
  <th id="55" onclick="myFunction()">-</th>
</tr>
</table>
`;

var vuoro = 0;
var player1 = [];
var player2 = [];

// Winning combinations
w1 = [11, 12, 13, 14, 15];
w2 = [21, 22, 23, 24, 25];
w3 = [31, 32, 33, 34, 35];
w4 = [41, 42, 43, 44, 45];
w5 = [51, 52, 53, 54, 55];

w6 = [11, 21, 31, 41, 51];
w7 = [12, 22, 32, 42, 52];
w8 = [13, 23, 33, 53, 53];
w9 = [14, 24, 34, 44, 54];
w10 = [15, 25, 35, 45, 55];

w11 = [11, 22, 33, 44, 55];
w12 = [51, 24, 33, 42, 15];

wAll = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12];

function testWin(player) {
  // ALL winning combinations to single combination
  for (k in wAll) {
    voittokombinaatio = wAll[k]; // single winning combination
    console.log("voittokombinaatio ", voittokombinaatio);
    var osumat = 0;

    // single winning combination to winning number
    for (j in voittokombinaatio) {
      voittosolu = voittokombinaatio[j]; // Winning number
      console.log("voittosolu ", voittosolu);
      var i;

      //  All numbers that player has to single number
      for (i in player) {
        solu = player[i]; // Single number

        // If single number == winning number
        if (solu == voittosolu) {
          osumat = osumat + 1; // Add one to "osumat"
          console.log("OSUMAT ", osumat);
        }
        // If osumat == 5 --> player has won
        if (osumat == 5) {
          return "Win";
        }
      }
    }
  }
}

function myFunction() {
  var id = event.srcElement.id;
  var valueOfId = document.getElementById(id).textContent;
  if (valueOfId == "-") {
    if (vuoro == 0) {
      document.getElementById(id).innerText = "X";
      document.getElementById("player").innerText = "Player 2";

      vuoro = 1;
      player1.push(id);
      var result = testWin(player1);

      if (result == "Win") {
        alert("Player 1 won!");
        setTimeout(initialize(), 5000);
      }
    } else {
      document.getElementById(id).innerText = "O";
      document.getElementById("player").innerText = "Player 1";

      vuoro = 0;
      player2.push(id);
      var result = testWin(player2);

      if (result == "Win") {
        alert("Player 2 won!");
        setTimeout(initialize(), 5000);
      }
    }
    console.log("result", result);
    console.log("Player1 ", player1);
    console.log("Player2 ", player2);
  }
}
function initialize() {
  vuoro = 0;
  player1 = [];
  player2 = [];
  document.getElementById("board").innerHTML = `
<p id="player">Player 1</p>
<table style="width: 30%;">
<tr>
<th id="11" onclick="myFunction(this)">-</th>
<th id="12" onclick="myFunction()">-</th>
<th id="13" onclick="myFunction()">-</th>
<th id="14" onclick="myFunction()">-</th>
<th id="15" onclick="myFunction()">-</th>
</tr>
<tr>
<th id="21" onclick="myFunction()">-</th>
<th id="22" onclick="myFunction()">-</th>
<th id="23" onclick="myFunction()">-</th>
<th id="24" onclick="myFunction()">-</th>
<th id="25" onclick="myFunction()">-</th>
</tr>
<tr>
<th id="31" onclick="myFunction()">-</th>
<th id="32" onclick="myFunction()">-</th>
<th id="33" onclick="myFunction()">-</th>
<th id="34" onclick="myFunction()">-</th>
<th id="35" onclick="myFunction()">-</th>
</tr>
<tr>
<th id="41" onclick="myFunction()">-</th>
<th id="42" onclick="myFunction()">-</th>
<th id="43" onclick="myFunction()">-</th>
<th id="44" onclick="myFunction()">-</th>
<th id="45" onclick="myFunction()">-</th>
</tr>
<tr>
<th id="51" onclick="myFunction()">-</th>
<th id="52" onclick="myFunction()">-</th>
<th id="53" onclick="myFunction()">-</th>
<th id="54" onclick="myFunction()">-</th>
<th id="55" onclick="myFunction()">-</th>
</tr>
</table>
`;
}
