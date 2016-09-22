window.onload = function() {

	var theParent = document.querySelector("#grid");
	theParent.addEventListener('click', getId, false);

	var player = '';
	var player2 = '';
	var turn = false; 


	var a1 = document.getElementById('0');
	var a2 = document.getElementById('1');
	var a3 = document.getElementById('2');
	var b1 = document.getElementById('3');
	var b2 = document.getElementById('4');
	var b3 = document.getElementById('5');
	var c1 = document.getElementById('6');
	var c2 = document.getElementById('7');
	var c3 = document.getElementById('8');

	var cells = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerHTML = '';
	}
	console.log(cells);
}

function chooseGame(type) {
	if (type == 'computer') {
		alert('You are X. X goes first.');
		player = 'O';
		player2 = 'X';
		turn = 'player1';
		playGame(player, player2, turn);
		document.getElementById('choose-game').style.display = 'none';
	} else {
		document.getElementById('choose-symbol').style.display = 'block';
		document.getElementById('choose-game').style.display = 'none';
	}
}

function choose(symbol) {
	player = symbol;
	if (symbol == 'X') {
		player2 = 'O';
	} else {
		player2 = 'X';
	}
	document.getElementById('choose-symbol').style.display = 'none';
}

function playGame(player1, player2, turn) {
	if (turn == 'player1') {
		document.getElementById('current-symbol').innerHTML = player1;
	} else {
		document.getElementById('current-symbol').innerHTML = player2;
	}
}

function getId(event) {
	if (event.target !== event.currentTarget) {
		var cellId = event.target.id;
		markSpot(cellId);

    console.log(cellId);
	}
  event.stopPropagation();
}

function markSpot(cellId) {
	var symbol = document.getElementById('current-symbol').value;
	document.getElementById(cellId).innerHTML = symbol;
	if (symbol == 'X') {
		symbol = 'O';
	} else {
		symbol = 'X';
	}
	console.log(symbol);
}