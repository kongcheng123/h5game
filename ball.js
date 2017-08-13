//球
var Ball = function () {
    var img = imgFromPath('ball.png')
    var o = {
        image: img,
        x: 100,
        y: 200,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function () {
        this.fired = true
    }
    o.stop = function () {
        this.fired = false
    }
    o.move = function () {
        if (this.fired) {
            log('move')
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY *= -1
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    return o
}