var S = 10;
var kaycakner = [];
var gishatichner = [];
var hakakaycakner = [];
var xoter = [];
var kover = [];
var matrix = [
	// [0,0,0,0,0,0,0,0,0,0],
	// [0,0,0,0,0,0,0,0,0,0],
	// [0,0,0,0,0,5,0,0,0,0],
	// [0,0,0,0,0,0,0,0,0,0],
	// [4,0,0,0,0,0,0,0,0,0],
	// [0,0,0,0,0,0,0,0,0,0],
	// [0,0,0,0,0,0,0,0,0,0]
];
var X = 40;
var Y = 20;
var multiply = 0;
var multiply1 = 0;
var multiply2 = 0;
var multiply3 = 0;
var audio = new Audio(); audio.src = "neizvesten-zvuki-fermy.mp3";
var audioKaycak = new Audio(); audioKaycak.src = "wova-zvuki-priroda-udar-molnii.mp3";
var audioKami = new Audio; audioKami.src = "zvuk-vetra-project_1_(mp3CC.com).mp3";
var bool = true;

//////////////////////patahakan matrix///////////////////////////////////
for (var i = 0; i < Y; i++) {
	matrix.push([]);
	for (var j = 0; j < X; j++) {
		var rand = Math.floor(Math.random() * 6);
		if (rand != 4) {
			matrix[i].push(rand);
		}
		else {
			matrix[i].push(0);
		}
	}
}
matrix[matrix.length - 1][matrix[0].length - 1] = 4;
