
const KEYS_OFFSET_X = 1;
const KEYS_OFFSET_Y = 0;

function drawKeyBar(keys, keysTileX, keysTileY) {

    for (var thisKey = 0; thisKey < keys; thisKey++) {
        // tile position of this key
        var thisKeyX = (keysTileX + thisKey) * TILE_WIDTH;
        var thisKeyY = keysTileY * TILE_HEIGHT;

        // draw this key
        canvasContext.drawImage(worldPics[WORLD_KEY], thisKeyX, thisKeyY);
    }

} // end function drawKeyBar ---------------------------------------------------

function drawGUI() {

    drawKeyBar(blueWarrior.keysHeld, KEYS_OFFSET_X, KEYS_OFFSET_Y);

} // end function drawGUI ------------------------------------------------------
