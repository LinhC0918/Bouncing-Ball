function GameBoard(canvas) {
    var self = this;
    self.canvas = canvas;
    var x = Math.floor(Math.random()*(self.canvas.width - 2 * Ball_Radius) + Ball_Radius);
    var y = Math.floor(Math.random()*(self.canvas.height - 2 * (Ball_Radius + Bar_Height)) + Ball_Radius + Bar_Height);
    self.score = new Score(20, 60, 55, 'black', self);
    self.ball = new Ball(x, y, 'red', self);
    self.bar = new Bar(self.canvas.width/2 - Bar_Width/2, self.canvas.height - Bar_Height, 'green',Bar_Width, Bar_Height, self);
    self.blocks = [
        new Bar(230, 20, 'blue',20, 20, self),
        new Bar(251, 20, 'blue',20, 20, self),
        new Bar(272, 20, 'blue',20, 20, self),
        new Bar(230, 41, 'blue',20, 20, self),
        new Bar(272, 41, 'blue',20, 20, self),
        new Bar(230, 62, 'blue',20, 20, self),
        new Bar(251, 62, 'blue',20, 20, self),
        new Bar(272, 62, 'blue',20, 20, self),
        new Bar(230, 83, 'blue',20, 20, self),
        new Bar(272, 83, 'blue',20, 20, self),
        new Bar(230, 104, 'blue',20, 20, self),
        new Bar(251, 104, 'blue',20, 20, self),
        new Bar(272, 104, 'blue',20, 20, self),
    ];

    self.render = function () {
        var context = self.canvas.getContext('2d');
        context.clearRect(0, 0, self.canvas.width, self.canvas.height);
        context.beginPath();
        self.score.render();
        self.blocks.forEach(function (block) {
            block.render();
        });
        self.bar.render();
        self.ball.render();
        context.fill();
    };

    self.getCanvas = function () {
        return self.canvas;
    };

    self.getWidth = function () {
        return self.canvas.width;
    };

    self.getHeight = function () {
        return self.canvas.height;
    };

    self.getBlocks = function(){
        return self.blocks;
    };

    self.moveBar = function (event) {
        switch (event.which) {
            case 37:
                self.bar.moveLeft();
                break;
            case 39:
                self.bar.moveRight();
                break;
        }
    };

    self.moveBall = function () {
        if (self.ball.x + Ball_Radius >= self.canvas.width) {
            self.ball.dx = - self.ball.dx;
        }

        if (self.ball.x - Ball_Radius < 0) {
            self.ball.dx = - self.ball.dx;
        }

        if ((self.ball.y + Ball_Radius) >= self.bar.y && (self.ball.x + Ball_Radius) > self.bar.x && (self.ball.x + Ball_Radius) < (self.bar.x + Bar_Width)) {
            self.ball.dy = - self.ball.dy;
        }

        if (self.ball.y - Ball_Radius < 0) {
            self.ball.dy = - self.ball.dy;
        }

        if (self.ball.y + Ball_Radius >= self.canvas.height) {
            self.ball.dy = 0;
            self.ball.dx = 0;
            alert('You lose');
        }

        self.ball.x += self.ball.dx;
        self.ball.y += self.ball.dy;
    };

    self.removeBlock = function (block) {
        var index = -1;
        for (var i = 0; i < self.blocks.length; i++){
            if (self.blocks[i] === block){
                index = i;
                break;
            }
        }
        if (index !== -1){
            self.blocks.splice(index, 1);
        }
    };

    self.move = function () {
        setInterval(function () {
            self.moveBall();
            self.ball.checkCollision();
            self.render();
        }, 15)
    };
}