import "./styles.css";

function myFunction() {
  document.getElementById("demo").style.color = "red";
}

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
