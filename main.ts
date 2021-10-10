//% color=#0a59a8 weight=100 icon="\uf0eb" block="Lablet";
namespace Lablet {
    /**
     * Returns with the result of the (a xor b) operation.
     * @param a an integer number
     * @param b an integer number
     */
    //% blockId=Lablet_xor block="$a xor $b" 
    export function xor(a: number, b: number): number {
        return a ^ b;
    }
    /**
     * Returns whether the number is a prime.
     * @param n a natural number
     */
    //% blockId=Lablet_isPrime block="is prime $n"
    export function isPrime(n: number): number {
        if (n == 0) return 0
        if (n == 1) return 0
        if (n == 2) return 1
        if (n % 2 == 0) return 0
        let numsqrt = Math.sqrt(n)
        for (let i = 3; i <= numsqrt; i += 2) {
            if (n % i == 0) return 0
        }
        return 1
    }
    /**
     * Displays a value as a segmented linear bar
     * @param value The value to display
     * @param min at this value no LED is lighting
     * @param max at this value all the LEDs are lighting
     */
    //% blockId=Lablet_plotValue
    //% block="plotValue $value min $min max $max"
    export function plotValue(value: number, min: number, max: number) {
        if (max < min) {
            basic.showIcon(IconNames.No)
            return
        }
        if (value < min) {
            basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .`)
            return
        }
        if (value > max) {
            basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .`)
            return
        }
        let x = min
        let dx = (max - min) / 25
        for (let i = 4; i >= 0; i--) {
            for (let j = 0; j < 5; j++) {
                if (x < value) led.plot(j, i)
                else led.unplot(j, i)
                x += dx
            }
        }
    }
}