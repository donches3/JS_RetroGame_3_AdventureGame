
var canvas, canvasContext;

var blueWarrior  = new warriorClass();
// end vars --------------------------------------------------------------------

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    // rudimentary loading screen
    colorRect(0,0, canvas.width, canvas.height, 'black');
    colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

    // game won't start until images finish loading
    loadImages();
} // end window.onload ---------------------------------------------------------

function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();

    loadLevel(levelOne);

} // end function imageLoadingDoneSoStartGame ----------------------------------

function loadLevel(whichLevel) {
    worldGrid = whichLevel.slice(); // copies all values in whichLevel into worldGrid
    blueWarrior.reset(warrior1Pic, "Blue Steel");
} // end function loadLevel ----------------------------------------------------

function updateAll() {
    moveAll();
    drawAll();
} // end function updateAll ----------------------------------------------------

function moveAll() {
    blueWarrior.move();
} // end function moveAll ------------------------------------------------------

function drawAll() {
    drawWorld();
    blueWarrior.draw();
    drawGUI();
} // end function drawAll ------------------------------------------------------
