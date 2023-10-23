let throttle = 0
let stop = 0
let steering = 0
radio.setGroup(8)
basic.forever(function () {
    steering = 0
    if (input.buttonIsPressed(Button.AB)) {
        stop = 100
        radio.sendValue("stop", stop)
        while (true) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        steering = 100
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        steering = -100
    }
    throttle = 0
    if (input.acceleration(Dimension.Y) < -512) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        throttle = 100
    } else if (input.acceleration(Dimension.Y) > 512) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        throttle = -100
    }
    radio.sendValue("throttle", throttle)
    radio.sendValue("steering", steering)
})
