class Wather extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
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
        return super.chooseCell(char1);

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