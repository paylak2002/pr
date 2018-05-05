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