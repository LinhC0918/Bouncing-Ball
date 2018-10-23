var canvas = document.getElementById('myCanvas');
var gameboard = new GameBoard(canvas);
gameboard.render();

function onKeyDown(event) {
    gameboard.moveBar(event);
}
function move() {
    gameboard.move();
}

