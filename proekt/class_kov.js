class kov extends Kendani {
	constructor(x, y, i) {
		super(x, y);
		this.e = 5;
		this.b = 0;
		this.index = i;
	}
	yntrelVandak(ch) {
		this.cord();
		return super.yntrelVandak(ch);
	}
	die() {
		for (var i in kover) {
			if (kover[i].x == this.x && kover[i].y == this.y) {
				kover.splice(i, 1);
				matrix[this.y][this.x] = 0;
				break;
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
		if (this.b >= 2 && exanak != 3) {
			var ran = random(this.yntrelVandak(0));
			matrix[ran[1]][ran[0]] = 2;
			kover.push(new kov(ran[0], ran[1]));
		}
	}
}
