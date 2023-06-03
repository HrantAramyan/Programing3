class allEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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
    chooseCell(char1, char2, char3) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 15 && y < matrix.length) {
                if (matrix[y][x] == char1 || matrix[y][x] == char2 || matrix[y][x] == char3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var food = random(this.chooseCell(1, 2, 3));
        if (food) {
            this.energy ++;
            matrix[this.y][this.x] = 0
            var newX = food[0];
            var newY = food[1];
            if (matrix[newY][newX] = 1) {
                for (var i in grassArr) {
                    if (newX == grassArr[i].x && newY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }

            }
            else if (matrix[this.y][this.x] = 2) {
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                    }
                }

            }
            else if (matrix[this.y][this.x] = 3) {

                for (var i in predatorArr) {
                    if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                    }
                }
            }
            this.energy ++;
        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in allEaterArr) {
                if (allEaterArr[i].x == this.x && allEaterArr[i].y == this.y) {
                    allEaterArr.splice(i, 1);
                }
            }

        }
    }
}