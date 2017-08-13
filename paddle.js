//板
var Paddle = function () {
    var img = imgFromPath('paddle.png')
    var o = {
        image: img,
        x: 100,
        y: 250,
        speed: 5,
    }
    o.moveLeft = function () {
        this.x -= this.speed
        if (this.x < 0) {
            this.x = 0
        }
    }
    o.moveRight = function () {
        this.x += this.speed
        if (this.x > 400 - this.image.width) {
            this.x = 400 - this.image.width
        }
    }
    o.collide = function (ball) {
        return xiangzhuang(o, ball) || xiangzhuang(ball, o)
    }
    return o
}