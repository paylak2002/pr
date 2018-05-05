class xot {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	mull() {
		var ran = random(this.yntrelVandak(0));
		if (ran) {
			matrix[ran[1]][ran[0]] = 1;
			xoter.push(new xot(ran[0], ran[1]));
		}
	}
}
class kov {
	constructor(x, y, i) {
		this.x = x;
		this.y = y;
		this.e = 5;
		this.b = 0;
		this.index = i;
	}
	cord() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		this.cord();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	die() {
		for (var i in kover) {
			if (kover[i].x == this.x && kover[i].y == this.y) {
				kover.splice(i, 1);
				matrix[this.y][this.x] = 0;
			}
		}
	}
	move() {
		if (random(this.yntrelVandak(1))) {
			matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(1));
			for (var i in xoter) {
				if (xoter[i].x == ran[0] && xoter[i].y == ran[1]) {
					xoter.splice(i, 1);
				}
			}
			this.e = 8;
			this.b++;
			matrix[ran[1]][ran[0]] = 2;
			this.x = ran[0];
			this.y = ran[1];
		}
		else {
			matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(0));
			this.e--;
			this.b = 0;
			if (ran) {
				matrix[ran[1]][ran[0]] = 2;
				this.x = ran[0];
				this.y = ran[1];
			}
		}
		this.cord();
		if (this.e <= 0) {
			this.die();
		}
		if (this.b >= 2) {
			var ran = random(this.yntrelVandak(0));
			matrix[ran[1]][ran[0]] = 2;
			kover.push(new kov(ran[0], ran[1]));
		}
	}
}
class gishatich {
	constructor(x, y, i) {
		this.x = x;
		this.y = y;
		this.e = 20;
		this.b = 0;
		this.index = i;
	}
	cord() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		this.cord();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	die() {
		for (var i in gishatichner) {
			if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
				gishatichner.splice(i, 1);
				matrix[this.y][this.x] = 0;
			}
		}
	}
	move() {
		if (random(this.yntrelVandak(2))) {
			matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(2));
			for (var i in kover) {
				if (kover[i].x == ran[0] && kover[i].y == ran[1]) {
					kover.splice(i, 1);
				}
			}
			matrix[ran[1]][ran[0]] = 3;
			this.x = ran[0];
			this.y = ran[1];
			this.e = 8;
			this.b++;
		}
		else {
			if (random(this.yntrelVandak(0))) {
				matrix[this.y][this.x] = 0;
				for (var i in xoter) {
					if (xoter[i].x == this.x && xoter[i].y == this.y) {
						matrix[this.y][this.x] = 1;
					}
				}
				var ran = random(this.yntrelVandak(0));
				matrix[ran[1]][ran[0]] = 3;
				this.x = ran[0];
				this.y = ran[1];
			}
			/////////////////////////////////////////////
			else if (random(this.yntrelVandak(1))) {
				for (var i in xoter) {
					if (!(xoter[i].x == this.x && xoter[i].y == this.y)) {
						matrix[this.y][this.x] = 0;
					}
				}
				matrix[this.y][this.x] = 1;
				var ran = random(this.yntrelVandak(1));
				matrix[ran[1]][ran[0]] = 3;
				this.x = ran[0];
				this.y = ran[1];
			}
			////////////////////////////////////////
			this.e--;
		}
		if (this.e <= 0) {
			this.die();
		}
		if (this.b >= 15) {
			if (random(this.yntrelVandak(0))) {
				var ran = random(this.yntrelVandak(0));
				matrix[ran[1]][ran[0]] = 2;
				gishatichner.push(new gishatich(ran[0], ran[1]));
			}
		}
		this.cord();
	}
}
class kaycak {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.i = index;
	}
	cord() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		this.cord();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	move() {
		if (random(this.yntrelVandak(0))) {
			matrix[this.y][this.x] = 0;
			var ran = random(this.yntrelVandak(0));
			matrix[ran[1]][ran[0]] = 4;
			this.x = ran[0];
			this.y = ran[1];
		}
		this.cord();
	}
	krakel() {
		audioKaycak.play();

		for (var i = 0; i < matrix[this.y].length; i++) {
			if (i != this.x) {
				if (matrix[this.y][i] == 1) {
					for (var k in xoter) {
						if (xoter[k].x == i && xoter[k].y == this.y) {
							xoter.splice(k, 1);
						}
					}
				}
				else if(matrix[this.y][i] == 2)
				{
					for (var k in kover) {
						if (kover[k].x == i && kover[k].y == this.y) {
							kover.splice(k, 1);
						}
					}
				}
				else if(matrix[this.y][i] == 3)
				{
					for (var k in gishatichner) {
						if (gishatichner[k].x == i && gishatichner[k].y == this.y) {
							gishatichner.splice(k, 1);
						}
					}
				}
				else if(matrix[this.y][i] == 5)
				{
					for (var k in hakakaycakner) {
						if (hakakaycakner[k].x == i && hakakaycakner[k].y == this.y) {
							hakakaycakner.splice(k, 1);
						}
					}
				}
				matrix[this.y][i] = 0;
			}
		}
		for (var i = 0; i < matrix.length; i++) {
			if (i != this.y) {
				if (matrix[i][this.x] == 1) {
					for (var k in xoter) {
						if (xoter[k].y == i && xoter[k].x == this.x) {
							xoter.splice(k, 1);
						}
					}
				}
				else if(matrix[i][this.x] == 2)
				{
					for (var k in kover) {
						if (kover[k].y == i && kover[k].x == this.x) {
							kover.splice(k, 1);
						}
					}
				}
				else if(matrix[i][this.x] == 3)
				{
					for (var k in gishatich) {
						if (gishatich[k].y == i && gishatich[k].x == this.x) {
							gishatich.splice(k, 1);
						}
					}
				}
				else if(matrix[i][this.x] == 5)
				{
					for (var k in hakakaycakner) {
						if (hakakaycakner[k].y == i && hakakaycakner[k].x == this.x) {
							hakakaycakner.splice(k, 1);
						}
					}
				}
				matrix[i][this.x] = 0;
			}
		}
	}
	die() {
		if (kover.length == 0 && gishatichner.length == 0) {
			kaycakner.splice(this.i, 1);
			matrix[this.y][this.x] = 0;
			bool = false;
		}
	}
}
class hakaK
{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	cord() {
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}
	yntrelVandak(ch) {
		this.cord();
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}
	voronum()
	{
		var arr = this.yntrelVandak(4);
		if(kaycakner.length == 1)
		{
			var cX = kaycakner[0].x;
			var cY = kaycakner[0].y;
				if(arr.length == 1)
				{
					console.log('jan');
					kaycakner.splice(0, 1);
					matrix[this.y][this.x] = 0;
					matrix[arr[0][1]][arr[0][0]] = 5;
					this.x = arr[0][0];
					this.y = arr[0][1];
					this.cord();
				}
				else
				{
					///////////////////////////arajin ev chororrd qarord/////////////////////////////
					if(cX > this.x && cY > this.y)
					{
						if(matrix[this.y + 1][this.x + 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y + 1][this.x + 1] = 5;
							this.x++;
							this.y++;
							this.cord();
						}
					}
					else if(cX > this.x && cY < this.y)
					{
						if(matrix[this.y - 1][this.x + 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y - 1][this.x + 1] = 5;
							this.x++;
							this.y--;
							this.cord();
						}
					}
					//////////////////////////erkrord ev erord /////////////////////////////////
					else if(cX < this.x && cY < this.y)
					{
						if(matrix[this.y - 1][this.x - 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y - 1][this.x - 1] = 5;
							this.x--;
							this.y--;
							this.cord();
						}
					}
					else if(cX < this.x && cY > this.y)
					{
						if(matrix[this.y + 1][this.x - 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y + 1][this.x - 1] = 5;
							this.x--;
							this.y++;
							this.cord();
						}
					}
					//////////////////////////dzax koxm//////////////////////////////
					else if(cX < this.x && cY == this.y)
					{
						if(matrix[this.y][this.x - 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y][this.x - 1] = 5;
							this.x--;
							this.cord();
						}
					}
					//////////////////////////verev/////////////////////////////////
					else if(cX == this.x && cY < this.y)
					{	
						if(matrix[this.y - 1][this.x] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y - 1][this.x] = 5;
							this.y--;
							this.cord();
						}
					}
					/////////////////////aj koxm ///////////////////////////////////////
					else if(cX > this.x && cY == this.y)
					{
						if(matrix[this.y][this.x + 1] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y][this.x + 1] = 5;
							this.x++;
							this.cord();
						}
					}
					/////////////////////nerkev ////////////////////////////////////////
					else if(cX == this.x && cY > this.y)
					{
						if(matrix[this.y + 1][this.x] == 0)
						{
							matrix[this.y][this.x] = 0;
							matrix[this.y + 1][this.x] = 5;
							this.y++;
							this.cord();
						}
					}
					/////////////////////////////////////////////////////////////////
				}
		}
	}
}












