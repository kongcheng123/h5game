//砖块
var Block = function (position) {
    var img = imgFromPath('block.png')
    var o = {
        image: img,
        x: position[0],
        y: position[1],
        alive: true,
        lives: position[2] || 1
    }
    o.killed = function () {
        o.lives--
            if (o.lives < 1) {
                o.alive = false
            }

    }
    o.collide = function (ball) {
        return xiangzhuang(o, ball) || xiangzhuang(ball, o)
    }
    return o
}