class Wather {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
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
    chooseCell(char1) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
   
    energyGive() {
        var empty = random(this.chooseCell(1));
        if (empty && energy < 5) {
            var energy = empty[0];
            var energy = empty[1];
            for (var i in grassArr) {
                if (grassArr[i].x == energy && grassArr[i].y == energy) {
                    grassArr[i].energy++
                }

            }
            this.energy--
        }
        
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in watherArr) {
                if (warherArr[i].x == this.x && watherArr[i].y == this.y) {
                    watherArr.splice(i, 1);
                }
            }

        }
    }
}