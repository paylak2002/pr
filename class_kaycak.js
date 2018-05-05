class kaycak extends Kendani {
	constructor(x, y, index) {
		super(x, y);
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
		return super.yntrelVandak(ch);
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
							break;
						}
					}
				}
				else if (matrix[this.y][i] == 2) {
					for (var k in kover) {
						if (kover[k].x == i && kover[k].y == this.y) {
							kover.splice(k, 1);
							break;
						}
					}
				}
				else if (matrix[this.y][i] == 3) {
					for (var k in gishatichner) {
						if (gishatichner[k].x == i && gishatichner[k].y == this.y) {
							gishatichner.splice(k, 1);
							break;
						}
					}
				}
				else if (matrix[this.y][i] == 5) {
					for (var k in hakakaycakner) {
						if (hakakaycakner[k].x == i && hakakaycakner[k].y == this.y) {
							hakakaycakner.splice(k, 1);
							break;
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
							break;
						}
					}
				}
				else if (matrix[i][this.x] == 2) {
					for (var k in kover) {
						if (kover[k].y == i && kover[k].x == this.x) {
							kover.splice(k, 1);
							break;
						}
					}
				}
				else if (matrix[i][this.x] == 3) {
					for (var k in gishatich) {
						if (gishatich[k].y == i && gishatich[k].x == this.x) {
							gishatich.splice(k, 1);
							break;
						}
					}
				}
				else if (matrix[i][this.x] == 5) {
					for (var k in hakakaycakner) {
						if (hakakaycakner[k].y == i && hakakaycakner[k].x == this.x) {
							hakakaycakner.splice(k, 1);
							break;
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