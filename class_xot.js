class xot extends Kendani{
	constructor(x, y) {
		super(x,y);
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
	mull() {
		var ran = random(this.yntrelVandak(0));
		if (ran) {
			matrix[ran[1]][ran[0]] = 1;
			xoter.push(new xot(ran[0], ran[1]));
		}
	}
}