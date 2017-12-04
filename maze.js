/*
 * 03/12/2017
 * Pilar Hernández
 */

function mazeProblem(boolMatrix, begin, end) {
    this.boolMatrix = boolMatrix;
    this.begin = begin;
    this.end = end;

    this.solution = [];

    // init recursion at given point
    this.init = function() {
        this.giveDirection(this.begin.x, this.begin.y);
    }


    this.giveDirection = function(x, y, direction) {
        goal = false;

        if (this.valid(x, y)) {

            this.boolMatrix[x][y] = "V"; // visited

            if (this.end.x == x && this.end.y == y)
                goal = true; // goal
            else {
                goal = this.giveDirection(x, y + 1, "down"); // down
                if (!goal)
                    goal = this.giveDirection(x + 1, y, "right"); // right
                if (!goal)
                    goal = this.giveDirection(x, y - 1, "up"); // up
                if (!goal)
                    goal = this.giveDirection(x - 1, y, "left"); // left
            }

            if (goal) {
                if (direction) { // first position no have direction
                    this.solution.push(direction);
                }
            }
        }

        return goal;
    }

    // check if x and y are valid in matrix
    this.valid = function(x, y) {
        if (x >= 0 && x < this.boolMatrix.length && y >= 0 && y < this.boolMatrix[0].length) {
            if (this.boolMatrix[x][y] == true) {
                return true;
            }
        }
        return false;
    }
}


var map = [
    [true, false, true, true, true, false],
    [true, false, true, false, true, false],
    [true, true, true, false, true, false],
    [false, false, false, false, true, false],
    [true, true, true, true, true, false],
    [true, false, false, false, false, true],
    [true, true, true, true, true, true]
];

//var map = [[true, false, false],[true, false, false],[true, false, false]];

/*var map = [[true,true,true,false,true,true,false,false,false,true,true,true,true],
[true,false,true,true,true,false,true,true,true,true,false,false,true],
[false,false,false,false,true,false,true,false,true,false,true,false,false],
[true,true,true,false,true,true,true,false,true,false,true,true,true],
[true,false,true,false,false,false,false,true,true,true,false,false,true],
[true,false,true,true,true,true,true,true,false,true,true,true,true],
[true,false,false,false,false,false,false,false,false,false,false,false,false],
[true,true,true,true,true,true,true,true,true,true,true,true,true]];*/


var test = new mazeProblem(map, {
    x: 0,
    y: 0
}, {
    x: 5,
    y: 5
});
test.init();
console.log(test.solution);