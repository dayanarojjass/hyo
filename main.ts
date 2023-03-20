input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
})
let min = 0
let max = 0
let currenttemperatura = input.temperature()
max = currenttemperatura
min = currenttemperatura
basic.forever(function () {
    basic.showString(".")
    currenttemperatura = input.temperature()
    if (currenttemperatura < min) {
        min = currenttemperatura
    }
    if (currenttemperatura > max) {
        max = currenttemperatura
    }
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
})
