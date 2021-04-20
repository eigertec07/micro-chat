input.onButtonPressed(Button.A, function () {
    F1 = "R2"
    radio.sendValue(F1, 2)
})
radio.onReceivedValue(function (name, value) {
    fist2 = 0
    basic.showString(name)
    basic.showNumber(value)
})
let F1 = ""
let fist2 = 0
radio.setGroup(1)
fist2 = 2
basic.forever(function () {
	
})
