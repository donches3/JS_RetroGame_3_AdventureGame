
const WORLD_W = 40;
const WORLD_H = 40;
const WORLD_GAP = 2;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;

var levelOne  = [4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                 1,0,0,0,1,1,1,4,4,4,4,1,1,1,1,1,1,0,0,1,
                 1,0,0,1,1,0,0,1,6,6,6,1,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,
                 1,0,0,1,0,0,5,0,0,0,5,0,0,1,0,0,1,0,0,1,
                 1,2,0,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
                 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,1,0,0,0,0,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
                 1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4];

var worldGrid = [];

const WORLD_FLOOR = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;
const WORLD_CUP  = 6;
// end vars --------------------------------------------------------------------

function returnTileTypeAtColRow(col, row) {
    // if inside world field ...
    if (col >= 0 && col < WORLD_COLS &&
        row >= 0 && row < WORLD_ROWS) {
            var worldIndexUnderCoord = rowColToArrayIndex(col, row);
            return worldGrid[worldIndexUnderCoord];
        } else { // outside world field, so no world
            return WORLD_WALL;
        } // end if else
} // end function isObstacleAtColRow -----------------------------------------------

function warriorWorldHandling(whichWarrior) {
    var warriorWorldCol = Math.floor(whichWarrior.x / WORLD_W);
    var warriorWorldRow = Math.floor(whichWarrior.y / WORLD_H);
    var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

    // if warrior is within world field ...
    if (warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS &&
        warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS) {

        var tileHere = returnTileTypeAtColRow(warriorWorldCol, warriorWorldRow)

        if (tileHere == WORLD_GOAL) { // goal here
            console.log(whichWarrior.name + " WINS!")
            loadLevel(levelOne);
        } else if (tileHere != WORLD_FLOOR) { // obstacle here

            // these two lines prevent burrowing bug by
            // reverse incrementing warrior position
            // This stops all motion
            whichWarrior.x -= whichWarrior.incrementX;
            whichWarrior.y -= whichWarrior.incrementY;

        } // end else if not floor
    } // end if within world field
} // end function warriorWorldHandling ---------------------------------------------

function rowColToArrayIndex(col, row) {
    return (row * WORLD_COLS) + col;
} // end function rowColToArrayIndex -------------------------------------------

function drawWorld() {

    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;

    for(var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for(var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
            var tileKindHere = worldGrid[arrayIndex];
            var useImg = worldPics[tileKindHere];
            canvasContext.drawImage(useImg, drawTileX, drawTileY);

            drawTileX += WORLD_W;
            arrayIndex++;
        } // end for eachCol
        drawTileX = 0; // carriage return
        drawTileY += WORLD_H; // to next row
    } // end for eachRow

} // end function drawWorld ---------------------------------------------------
