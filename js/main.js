var answers = {
	answer1: "tiffany",
	answer2: "goodguys",
	answer3: "knife",
	answer4: "serialkiller",
	answer5: "andy",
	answer6: "daftpunk",
	answer7: "childsplay",
	answer8: "glen",
	answer9: "artificialintelligence",
	answer10: "blue"
}
function checkPuzzle() {
	var question1;
	var question2;
	var question3;
	var question4;
	var question5;
	var question6;
	var question7;
	var question8;
	var question9;
	var question10;
	for (var i = 1; i < 7; i++) {
		question1 += document.getElementById("q1i" + i).value;
	}
	for (var i = 1; i < 8; i++) {
		question2 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 5; i++) {
		question3 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 12; i++) {
		question4 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 4; i++) {
		question5 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 8; i++) {
		question6 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 10; i++) {
		question7 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 4; i++) {
		question8 += document.getElementById("q4i" + i).value;
	}
	for (var i = 1; i < 22; i++) {
		question9 += document.getElementById("q9i" + i).value;
	}
	for (var i = 1; i < 4; i++) {
		question10 += document.getElementById("q4i" + i).value;
	}
	console.log(question9);
}
