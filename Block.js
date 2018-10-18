function Block(x, y, color, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.color = color;
    self.board = board;
    self.render = function () {
        var context = self.board.getCanvas().getContext('2d');
        context.fillStyle = self.color;
        context.fillRect(self.x, self.y, Block_Width, Block_Height);

    };
    self.getX = function () {
        return self.x;
    };
    self.getY = function () {
        return self.y;
    }
}