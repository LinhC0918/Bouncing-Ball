function Score(x, y, maxWidth, color, board) {

    this.x = x;
    this.y = y;
    this.maxWidth = maxWidth;
    this.color = color;
    this.board = board;
    this.point = 0;
    this.render = function () {
        var contextScore = this.board.getCanvas().getContext('2d');
        contextScore.font = '30px Arial';
        contextScore.fillStyle = this.color;
        contextScore.fillText('Score: ' + this.point, this.x, this.y, this.maxWidth);
    };

    this.setPoint = function () {
         this.point++;
    };

    this.getPoint = function () {
        return this.point;
    }
}