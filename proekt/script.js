$(document).ready(function(){
$('<h1></h1>').attr('class','h1_text').appendTo('body');
});
//////////////////////hakakaycakneri grancman hamar///////////////////
for (var i = 0; i < matrix.length; ++i) {
	for (var j = 0; j < matrix[i].length; ++j) {
		if (matrix[i][j] == 5) {
			hakakaycakner.push(new hakaK(j, i, hakakaycakner.length));
		}
	}
}
//////////////////////kaycakneri grancman kamar vorpes obekr//////////
for (var i = 0; i < matrix.length; ++i) {
	for (var j = 0; j < matrix[i].length; ++j) {
		if (matrix[i][j] == 4) {
			kaycakner.push(new kaycak(j, i, kaycakner.length));
		}
	}
}
//////////////////////gishatichneri grancman hamar/////////////////////
for (var i = 0; i < matrix.length; ++i) {
	for (var j = 0; j < matrix[i].length; ++j) {
		if (matrix[i][j] == 3) {
			gishatichner.push(new gishatich(j, i, gishatichner.length));
		}
	}
}
/////////////////////////////////////////////////////////////////////////////

///////////////////////exac xoteri grancumo vorpes obekt////////////////////

for (var i = 0; i < matrix.length; ++i) {
	for (var j = 0; j < matrix[i].length; ++j) {
		if (matrix[i][j] == 1) {
			xoter.push(new xot(j, i));
		}
	}
}
//////////////////////         koveri grancman hamar          //////////////////////////

for (var i = 0; i < matrix.length; ++i) {
	for (var j = 0; j < matrix[i].length; ++j) {
		if (matrix[i][j] == 2) {
			kover.push(new kov(j, i, kover.length));
		}
	}
}

/////////////////////////////////////////////////////////////////////////////////////

function setup() {
	createCanvas(X * S, Y * S);
	background("'#acacac");
}

function draw() {
	frameRate(10);
	exanak_multiply++;
	multiply++;
	multiply1++;
	multiply2++;
	multiply3++;
	/////////////////////////kaycakneri verakendanacman hamar///////////////////////////
	var arrR = [[0, 0], [matrix[0].length - 1, matrix.length - 1]];
	var rXY = random(arrR);
	if (kover.length != 0 && gishatichner.length != 0) {
		if (kaycakner.length == 0) {
			if (matrix[rXY[1]][rXY[0]] == 1) {
				for (var k in xoter) {
					if (xoter[k].x == rXY[0] && xoter[k].y == rXY[1]) {
						xoter.splice(k, 1);
					}
				}
			}
			else if (matrix[rXY[1]][rXY[0]] == 2) {
				for (var k in kover) {
					if (kover[k].x == rXY[0] && kover[k].y == rXY[1]) {
						kover.splice(k, 1);
					}
				}
			}
			else if (matrix[rXY[1]][rXY[0]] == 3) {
				for (var k in gishatichner) {
					if (gishatichner[k].x == rXY[0] && gishatichner[k].y == rXY[1]) {
						gishatichner.splice(k, 1);
					}
				}
			}
			else if (matrix[rXY[1]][rXY[0]] == 5) {
				for (var k in hakakaycakner) {
					if (hakakaycakner[k].x == rXY[0] && hakakaycakner[k].y == rXY[1]) {
						hakakaycakner.splice(k, 1);
					}
				}
			}
			kaycakner.push(new kaycak(rXY[0], rXY[1], kaycakner.length));
			matrix[rXY[1]][rXY[0]] = 4;
		}
	}
	//////////////////////////////////////////////////////////////////////////////
	for (var i = 0; i < matrix.length; ++i) {
		for (var j = 0; j < matrix[i].length; ++j) {
			if (matrix[i][j] == 0) {
				fill('#acacac');
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 1) {
				fill(xoteri_guyn);
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 2) {
				fill('#ff00ff');
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 3) {
				fill('#003366');
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 4) {
				fill("red");
				rect(j * S, i * S, S, S);
			}
			else if (matrix[i][j] == 5) {
				fill("black");
				rect(j * S, i * S, S, S);
			}
		}
	}

	////////////////////////////////////////
	if (multiply >= 1) {
		for (var i in xoter) {
			xoter[i].mull();
		}
		multiply = 0;
	}
	if (multiply2 >= 2) {
		for (var i in kover) {
			kover[i].move();
		}
		multiply2 = 0;
	}
	if (multiply1 >= 3) {
		for (var i in gishatichner) {
			gishatichner[i].move();
		}
		multiply1 = 0;
	}
	if (multiply3 >= 4) {
		if(exanak == 2){
			for (var i in kaycakner) {
				kaycakner[i].move();
				kaycakner[i].krakel();
				kaycakner[i].die();
			}
		}
		for (var i in hakakaycakner) {
			hakakaycakner[i].voronum();
		}
		multiply3 = 0;
	}
	///////////////////////////////////////
	if(exanak_multiply >= 40)
	{
		exanak_multiply = 0;
		exanak++;
		if(exanak >= 4)
		{
			exanak = 0;
		}
	}
		if(exanak == 0)
		{
			$(document).ready(function(){
				$(".h1_text").text('Գարուն');
				xoteri_guyn = 'green';
			});
		}
		else if(exanak == 1)
		{
			$(document).ready(function(){
				$(".h1_text").text('Ամառ');
				xoteri_guyn = '#40ff00';
			});
		}
		else if(exanak == 2)
		{
			$(document).ready(function(){
				$(".h1_text").text('Աշուն');
				xoteri_guyn = '#ffff00';
			});
		}
		else if(exanak == 3)
		{
			$(document).ready(function(){
				$(".h1_text").text('Ձմեռ');
				xoteri_guyn = '#00ffbf';								
			});
		}
		///////////////////////////////////////////
}
