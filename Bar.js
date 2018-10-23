function Bar(x, y, color,width, height, board) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.board = board;

    this.render = function () {
        var contextBar = this.board.getCanvas().getContext('2d');
        contextBar.fillStyle = this.color;
        contextBar.fillRect(this.x, this.y, this.width, this.height);

    };

    this.moveRight = function () {
        this.x += speedBar;
        if (this.x >= canvas.width - Bar_Width)
            this.x = canvas.width - Bar_Width;
    };

    this.moveLeft = function () {
        this.x -= speedBar;
        if (this.x <= 0)
            this.x = 0;
    };

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };
}