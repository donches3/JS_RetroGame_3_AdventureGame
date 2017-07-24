
const WALK_SPEED = 3;

function warriorClass() { // begin warriorClass ========================================

    this.x = 75;
    this.y = 75;
    this.incrementX = 0;
    this.incrementY = 0;
    this.myWarriorPic; // which picture to use
    this.name = "Untitled Warrior";

    this.keyHeld_MoveWest   = false;
    this.keyHeld_MoveEast   = false;
    this.keyHeld_MoveNorth  = false;
    this.keyHeld_MoveSouth  = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.setupInput = function(upKey, rightKey, downKey, leftKey) {
        this.controlKeyUp    = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown  = downKey;
        this.controlKeyLeft  = leftKey;
    }

    this.reset = function(whichImage, warriorName) {
        this.name = warriorName;
        this.myWarriorPic = whichImage;

        // cycle thru each row and column ...
        for(var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
            for(var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                // ... to find first available player start position
                if(worldGrid[arrayIndex] == WORLD_PLAYERSTART) {
                    worldGrid[arrayIndex] = WORLD_ROAD;  // replace with road tile
                    // place player here
                    this.x = eachCol * WORLD_W + WORLD_W/2;
                    this.y = eachRow * WORLD_H + WORLD_H/2;
                    return; // prevents destruction of other player start positions
                } // end if playerstart
            } // end for eachCol
        } // end for eachRow
        console.log("NO PLAYER START FOUND !!!");
    } // end this function reset -----------------------------------------------

    this.move = function() {

        this.incrementX = 0;
        this.incrementY = 0;

        if(this.keyHeld_MoveNorth) {
            this.incrementY -= WALK_SPEED;
        }
        if(this.keyHeld_MoveSouth) {
            this.incrementY += WALK_SPEED;
        }

        if(this.keyHeld_MoveEast) {
            this.incrementX += WALK_SPEED;
        }
        if(this.keyHeld_MoveWest) {
            this.incrementX -= WALK_SPEED;
        }

        // increment warrior position
        this.x += this.incrementX;
        this.y += this.incrementY;

        warriorWorldHandling(this);

    } // end this function move ------------------------------------------------

    this.draw = function() {
        drawBitmapCentered(this.myWarriorPic, this.x, this.y);
    } // end this function draw ------------------------------------------------

} // end function warriorClass =====================================================
