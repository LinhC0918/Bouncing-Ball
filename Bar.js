function Bar(x, y, color, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.color = color;
    self.board = board;

    self.render = function () {
        var contextBar = self.board.getCanvas().getContext('2d');
        contextBar.fillStyle = self.color;
        contextBar.fillRect(self.x, self.y, Bar_Width, Bar_Height);

    };

    self.moveRight = function () {
        self.x += speedBar;
        if (self.x >= canvas.width - Bar_Width)
            self.x = canvas.width - Bar_Width;
    };

    self.moveLeft = function () {
        self.x -= speedBar;
        if (self.x <= 0)
            self.x = 0;
    }
}