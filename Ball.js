function Ball(x, y, color, board) {
    var self = this;
    self.x = x;
    self.y = y;
    self.color = color;
    self.board = board;
    self.radius = Ball_Radius;
    self.dx = speedBall_X;
    self.dy = speedBall_Y;

    self.render = function () {
        var contextBall = self.board.getCanvas().getContext('2d');
        contextBall.arc(self.x, self.y, self.radius, 0, 2 * Math.PI);
        contextBall.fillStyle = self.color;

    };

    self.getX = function () {
        return self.x;
    };

    self.getY = function () {
        return self.y;
    };

    self.checkCollision = function () {
        var brick = null;
        self.board.getBlocks().forEach(function (bar) {
            var distanceX = Math.abs((self.x + Ball_Radius/2) - (blocks.getX() + Block_Width/2));
            var distanceY = Math.abs((self.y + Ball_Radius/2) - (blocks.getY() + Block_Height/2));
            if(distanceX < Ball_Radius/2 + Block_Width/2 && distanceY < Ball_Radius/2 + Block_Height/2){
                brick = bar;
                self.dy = - self.dy;

            }
        });

        if(brick !== null){
            self.board.removeBlock(brick);
        }
    }


}

