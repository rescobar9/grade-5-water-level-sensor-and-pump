let item = 0
basic.clearScreen()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(item)
    basic.pause(100)
    if (item < 500) {
        basic.showIcon(IconNames.Sad)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        basic.clearScreen()
    }
})
