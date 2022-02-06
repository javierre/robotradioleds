radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 150)
    } else if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 150)
    } else if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 150)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
    }
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.All)
})
radio.setGroup(1)
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
let str2 = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
str2.showRainbow(1, 360)
basic.forever(function () {
	
})
