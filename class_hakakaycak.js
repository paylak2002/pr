class hakaK extends Kendani{
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
	voronum() {
		var arr = this.yntrelVandak(4);
		if (kaycakner.length == 1) {
			var cX = kaycakner[0].x;
			var cY = kaycakner[0].y;
			if (arr.length == 1) {
				console.log('jan');
				kaycakner.splice(0, 1);
				matrix[this.y][this.x] = 0;
				matrix[arr[0][1]][arr[0][0]] = 5;
				this.x = arr[0][0];
				this.y = arr[0][1];
				this.cord();
			}
			else {
				///////////////////////////arajin ev chororrd qarord/////////////////////////////
				if (cX > this.x && cY > this.y) {
					if (matrix[this.y + 1][this.x + 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y + 1][this.x + 1] = 5;
						this.x++;
						this.y++;
						this.cord();
					}
				}
				else if (cX > this.x && cY < this.y) {
					if (matrix[this.y - 1][this.x + 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y - 1][this.x + 1] = 5;
						this.x++;
						this.y--;
						this.cord();
					}
				}
				//////////////////////////erkrord ev erord /////////////////////////////////
				else if (cX < this.x && cY < this.y) {
					if (matrix[this.y - 1][this.x - 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y - 1][this.x - 1] = 5;
						this.x--;
						this.y--;
						this.cord();
					}
				}
				else if (cX < this.x && cY > this.y) {
					if (matrix[this.y + 1][this.x - 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y + 1][this.x - 1] = 5;
						this.x--;
						this.y++;
						this.cord();
					}
				}
				//////////////////////////dzax koxm//////////////////////////////
				else if (cX < this.x && cY == this.y) {
					if (matrix[this.y][this.x - 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y][this.x - 1] = 5;
						this.x--;
						this.cord();
					}
				}
				//////////////////////////verev/////////////////////////////////
				else if (cX == this.x && cY < this.y) {
					if (matrix[this.y - 1][this.x] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y - 1][this.x] = 5;
						this.y--;
						this.cord();
					}
				}
				/////////////////////aj koxm ///////////////////////////////////////
				else if (cX > this.x && cY == this.y) {
					if (matrix[this.y][this.x + 1] == 0) {
						matrix[this.y][this.x] = 0;
						matrix[this.y][this.x + 1] = 5;
						this.x++;
						this.cord();
					}
				}
				/////////////////////nerkev ////////////////////////////////////////
				else if (cX == this.x && cY > this.y) {
					if (matrix[this.y + 1][this.x] == 0) {
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