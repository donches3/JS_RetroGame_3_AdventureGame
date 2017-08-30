var warrior1Pic  = document.createElement("img");

var worldPics = [];

var picsToLoad = 0; // set automatically in function loadImages

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if(picsToLoad == 0) {
        imageLoadingDoneSoStartGame();
    }
} // end function countLoadedImagesAndLaunchIfReady ----------------------------

function beginLoadingImage(imgVar, fileName) {
    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = "images/" + fileName;
} // end function beginLoadingImage --------------------------------------------

function loadImageForWorldCode(worldCode, fileName) {
    worldPics[worldCode] = document.createElement("img");
    beginLoadingImage(worldPics[worldCode], fileName);
} // end function loadImageForWorldCode ----------------------------------------


function loadImages() {
    var imageList = [
        {varName: warrior1Pic,      theFile: "player1warrior.png"},
        {worldType: WORLD_FLOOR,    theFile: "world_floor.png"},
        {worldType: WORLD_WALL,     theFile: "world_wall.png"},
        {worldType: WORLD_GOAL,     theFile: "world_goal.png"},
        {worldType: WORLD_KEY,      theFile: "world_key.png"},
        {worldType: WORLD_DOOR,     theFile: "world_door.png"},
        ];

    picsToLoad = imageList.length;

    for (var i = 0; i < imageList.length; i++) {
        if(imageList[i].varName != undefined) {
            beginLoadingImage(imageList[i].varName ,imageList[i].theFile )
        } else {
            loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
        }
    }

} // end function loadImages ---------------------------------------------------
