var canvas = document.getElementById('myCanvas');
var gameboard = new GameBoard(canvas);
gameboard.render();
function start() {
    gameboard.move();
}

function onKeyDown(event) {
    gameboard.moveBar(event);
}

