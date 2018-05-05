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