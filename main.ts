input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(300)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.pause(700)
    StemSeals.DriveWheels(speed, steer)
    basic.pause(2000)
    StemSeals.DriveWheels(0, steer)
})
input.onButtonPressed(Button.B, function () {
    if (Forward) {
        speed += 10
    } else {
        speed += -10
    }
    if (Math.abs(speed) > 100) {
        speed = 0
        Forward = !(Forward)
    }
})
let LEDCount = 0
let Forward = false
let steer = 0
let speed = 0
StemSeals.playScale(MyEnum.Up, MyPitch.Middle)
basic.showIcon(IconNames.Yes)
speed = 10
steer = 0
if (speed >= 0) {
    Forward = true
} else {
    Forward = false
}
basic.forever(function () {
    basic.clearScreen()
    basic.pause(50)
    led.plot(2, 2)
    LEDCount = Math.round(Math.abs(speed / 10))
    for (let index = 0; index <= LEDCount; index++) {
        if (index != 0) {
            if (Forward) {
                if (index <= 5) {
                    led.plot(index - 1, 3)
                } else {
                    led.plot(index - 6, 4)
                }
            } else {
                if (index <= 5) {
                    led.plot(index - 1, 1)
                } else {
                    led.plot(index - 6, 0)
                }
            }
        }
    }
    basic.pause(500)
    basic.clearScreen()
})
