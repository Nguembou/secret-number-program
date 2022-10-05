input.onButtonPressed(Button.A, function () {
    Guess += 1
    basic.showNumber(Guess)
})
input.onButtonPressed(Button.AB, function () {
    if (Guess > Secret) {
        basic.showString("higher")
        music.playMelody("C5 B A G A B C5 - ", 120)
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
    } else if (Guess < Secret) {
        basic.showString("lower")
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        music.playMelody("C D E F E D C - ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    Secret += -1
    basic.showNumber(Guess)
})
let Guess = 0
let Secret = 0
Secret = randint(0, 20)
basic.forever(function () {
	
})
