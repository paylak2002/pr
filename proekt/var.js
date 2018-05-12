var S = 20;
var kaycakner = [];
var gishatichner = [];
var hakakaycakner = [];
var xoter = [];
var kover = [];
var matrix = [
	// [0,0,0,0,0,3,0,3,3,0],
	// [0,2,0,0,0,0,0,0,3,0],
	// [0,2,0,2,0,2,0,0,3,0],
	// [0,0,0,0,0,0,0,0,1,0],
	// [4,0,0,3,0,2,0,0,1,0],
	// [0,0,0,0,0,0,0,0,1,0],
	// [0,0,0,0,0,1,0,0,0,0]
];
var X = 40;
var Y = 20;
var multiply = 0;
var multiply1 = 0;
var multiply2 = 0;
var multiply3 = 0;
var bool = true;
////exanak//////////////
var exanak_multiply = 0;
var exanak = 0;
var xoteri_guyn = '';

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
