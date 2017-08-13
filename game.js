var Game = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id_canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    g.drawImage = function (game) {
        g.context.drawImage(game.image, game.x, game.y)
    }
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }
    window.fps = 30
    var runload = function () {
        log('g.actions', g.actions)
        var actions = Object.keys(g.actions)
        for (var index = 0; index < actions.length; index++) {
            var key = actions[index]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
        setTimeout(function () {
            runload()
        }, 1000 / window.fps)
    }
    setTimeout(function () {
        runload()
    }, 1000 / fps)
    return g
}