
/**
 * NFC STEM SEALs Extension for Micro:Bit by Dr. G. Maresch
 * Version 2.1
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="up"
    Up,
    //% block="down"
    Down
}
enum MyPitch {
    //% block="low"
    Low,
    //% block="middle"
    Middle,
    //% block="high"
    High,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0222ff icon="\uf1d1"
namespace StemSeals {
    /**
     * TODO: describe your function here
     * @param e describe parameter here
     * e == 0 plays scale upward
     * e == 1 plays scale downward
     * @param p describe parameter here
     * p == 0 plays low G major scale
     * p == 1 plays middle C major scale
     * p == 2 plays middle F major scale
     */
    //% block
    export function playScale(e: MyEnum, p: MyPitch): void {
        // Add code here
        let x: number;
        if (p == 0) {
            x = 1;
        } else if (p == 1) {
            x = 2;
        } else {
            x = 3;
        }
        if (p == 0) {
            if (e == 0) {
                music.playTone(196, music.beat(BeatFraction.Half))
                music.playTone(220, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Whole))
            } else {
                music.playTone(392, music.beat(BeatFraction.Half))
                music.playTone(370, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Quarter))
                music.playTone(220, music.beat(BeatFraction.Quarter))
                music.playTone(196, music.beat(BeatFraction.Whole))
            }
        } else if (p == 1) {
            if (e == 0) {
                music.playTone(262, music.beat(BeatFraction.Half))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(523, music.beat(BeatFraction.Whole))
            } else {
                music.playTone(523, music.beat(BeatFraction.Half))
                music.playTone(494, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Whole))
            }
        } else {
            if (e == 0) {
                music.playTone(349, music.beat(BeatFraction.Half))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(466, music.beat(BeatFraction.Quarter))
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.playTone(587, music.beat(BeatFraction.Quarter))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(698, music.beat(BeatFraction.Whole))
            } else {
                music.playTone(698, music.beat(BeatFraction.Half))
                music.playTone(659, music.beat(BeatFraction.Quarter))
                music.playTone(587, music.beat(BeatFraction.Quarter))
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.playTone(466, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Whole))
            }
        }
    }

    /**
     * TODO: describe your function here
     * @param e describe parameter here
     * e == 0 plays scale upward
     * e == 1 plays scale downward
     * @param p describe parameter here
     * p == 0 plays low G major scale
     * p == 1 plays middle C major scale
     * p == 2 plays middle F major scale
     */
    //% block
    export function playTriad(e: MyEnum, p: MyPitch): void {
        // Add code here
        let x: number;
        if (p == 0) {
            x = 1;
        } else if (p == 1) {
            x = 2;
        } else {
            x = 3;
        }
        if (p == 0) {
            if (e == 0) {
                music.playTone(196, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Quarter))
                music.playTone(294, music.beat(BeatFraction.Half))
            } else {
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Quarter))
                music.playTone(196, music.beat(BeatFraction.Half))
            }
        } else if (p == 1) {
            if (e == 0) {
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(392, music.beat(BeatFraction.Half))
            } else {
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Quarter))
                music.playTone(262, music.beat(BeatFraction.Half))
            }
        } else {
            if (e == 0) {
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(523, music.beat(BeatFraction.Half))
            } else {
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Quarter))
                music.playTone(349, music.beat(BeatFraction.Half))
            }
        }
    }

    /**
         * TODO: describe your function here
         * @param e describe parameter here
         * e == 0 plays scale upward
         * e == 1 plays scale downward
         * @param p describe parameter here
         * p == 0 plays low G major scale
         * p == 1 plays middle C major scale
         * p == 2 plays middle F major scale
         */
    //% block
    export function playDiad(e: MyEnum, p: MyPitch): void {
        // Add code here
        let x: number;
        if (p == 0) {
            x = 1;
        } else if (p == 1) {
            x = 2;
        } else {
            x = 3;
        }
        if (p == 0) {
            if (e == 0) {
                music.playTone(196, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Half))
            } else {
                music.playTone(294, music.beat(BeatFraction.Quarter))
                music.playTone(247, music.beat(BeatFraction.Half))
            }
        } else if (p == 1) {
            if (e == 0) {
                music.playTone(262, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Half))
            } else {
                music.playTone(392, music.beat(BeatFraction.Quarter))
                music.playTone(330, music.beat(BeatFraction.Half))
            }
        } else {
            if (e == 0) {
                music.playTone(349, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Half))
            } else {
                music.playTone(523, music.beat(BeatFraction.Quarter))
                music.playTone(440, music.beat(BeatFraction.Half))
            }
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="Drive Wheels with Speed %sp and Steer %st"
    //% sp.min=-100 sp.max=100 sp.defl=0
    //% st.min=-100 st.max=100 st.defl=0
    export function DriveWheels(sp: number, st: number) {
        let MotorLeft = 0
        let MotorRight = 0
        if (sp >= 0) {
            if (st > 100) {

            } else if (st >= 50) {
                MotorLeft = sp * 1023 / 100
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
                MotorRight = MotorLeft * (st - 50) / 50
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
            } else if (st >= 0) {
                MotorLeft = sp * 1023 / 100
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
                MotorRight = MotorLeft * (50 - st) / 50
                pins.digitalWritePin(DigitalPin.P12, 1)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
            } else if (st >= -50) {
                MotorRight = sp * 1023 / 100
                pins.digitalWritePin(DigitalPin.P12, 1)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
                MotorLeft = MotorRight * (50 + st) / 50
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
            } else if (st >= -100) {
                MotorRight = sp * 1023 / 100
                pins.digitalWritePin(DigitalPin.P12, 1)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
                MotorLeft = MotorRight * (0 - st - 50) / 50
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
            } else {

            }
        } else if (sp >= -100) {
            if (st > 100) {

            } else if (st >= 50) {
                MotorLeft = (0 - sp) * 1023 / 100
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
                MotorRight = MotorLeft * (st - 50) / 50
                pins.digitalWritePin(DigitalPin.P12, 1)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
            } else if (st >= 0) {
                MotorLeft = (0 - sp) * 1023 / 100
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
                MotorRight = MotorLeft * (50 - st) / 50
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
            } else if (st >= -50) {
                MotorRight = (0 - sp) * 1023 / 100
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
                MotorLeft = MotorRight * (50 + st) / 50
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
            } else if (st >= -100) {
                MotorRight = (0 - sp) * 1023 / 100
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.analogWritePin(AnalogPin.P2, MotorRight)
                MotorLeft = MotorRight * (0 - st - 50) / 50
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.analogWritePin(AnalogPin.P1, MotorLeft)
            } else {

            }
        } else {

        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
    */
    //% block="clear Serial LCD"
    //% advanced=true
    export function clearSerialLCD() {
        let ParStr = ""
        ParStr = String.fromCharCode(124)
        ParStr = "" + ParStr + String.fromCharCode(45)
        serial.writeString(ParStr)
        basic.pause(100)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
    */
    //% block="set Serial LCD R: %numR G: %numG B: %numB"
    //% numR.min=0 numR.max=29 numR.defl=10
    //% numG.min=0 numG.max=29 numG.defl=10
    //% numB.min=0 numB.max=29 numB.defl=10
    //% advanced=true
    export function setSerialLCD(numR: number, numG: number, numB: number) {
        let ParStr = ""
        let ParInt = 0
        ParStr = String.fromCharCode(124)
        ParInt = 128 + numR
        ParStr = "" + ParStr + String.fromCharCode(ParInt)
        ParStr = "" + ParStr + String.fromCharCode(124)
        ParInt = 158 + numG
        ParStr = "" + ParStr + String.fromCharCode(ParInt)
        ParStr = "" + ParStr + String.fromCharCode(124)
        ParInt = 188 + numB
        ParStr = "" + ParStr + String.fromCharCode(ParInt)
        serial.writeString(ParStr)
        basic.pause(100)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% advanced=true
    export function displaySignal(TSRX: number) {
        let ParStr = ""
        ParStr = String.fromCharCode(254)
        ParStr = "" + ParStr + String.fromCharCode(128 + (84 + 13))
        if (input.runningTime() - TSRX < 1000) {
            for (let index = 0; index < 7; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
            serial.writeString(ParStr)
        } else if (input.runningTime() - TSRX < 2000) {
            ParStr = "" + ParStr + String.fromCharCode(95)
            for (let index = 0; index < 6; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
        } else if (input.runningTime() - TSRX < 3000) {
            for (let index = 0; index < 2; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
            for (let index = 0; index < 5; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
        } else if (input.runningTime() - TSRX < 4000) {
            for (let index = 0; index < 3; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
            for (let index = 0; index < 4; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
        } else if (input.runningTime() - TSRX < 5000) {
            for (let index = 0; index < 4; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
            for (let index = 0; index < 3; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
        } else if (input.runningTime() - TSRX < 60000) {
            for (let index = 0; index < 5; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
            for (let index = 0; index < 2; index++) {
                ParStr = "" + ParStr + String.fromCharCode(255)
            }
        } else if (input.runningTime() - TSRX < 1200000) {
            for (let index = 0; index < 6; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
            ParStr = "" + ParStr + String.fromCharCode(255)
        } else {
            for (let index = 0; index < 7; index++) {
                ParStr = "" + ParStr + String.fromCharCode(95)
            }
        }
        serial.writeString(ParStr)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="show on LCD %text in row %row at col %col"
    //% row.min=1 row.max=4 row.defl=1
    //% col.min=0 col.max=19 col.defl=0
    //% advanced=true
    export function showOnLCD(text: string, row: number, col: number) {
        let ParStr = ""
        ParStr = String.fromCharCode(254)
        if (row == 1) {
            ParStr = "" + ParStr + String.fromCharCode(128 + (0 + col))
        } else if (row == 2) {
            ParStr = "" + ParStr + String.fromCharCode(128 + (64 + col))
        } else if (row == 3) {
            ParStr = "" + ParStr + String.fromCharCode(128 + (20 + col))
        } else {
            ParStr = "" + ParStr + String.fromCharCode(128 + (84 + col))
        }
        ParStr = "" + ParStr + text
        serial.writeString(ParStr)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="format Number %num with %digits digits and %decimals decimals"
    //% digits.min=1 digits.max=12 digits.defl=3
    //% decimals.min=0 decimals.max=10 decimals.defl=0
    //% advanced=true
    export function formatNumber(num: number, digits: number, decimals: number) {
        let TempText = ""
        let TempNum = 0
        let DotPosition = 0
        TempText = convertToText(num)
        DotPosition = 99
        for (let index = 0; index <= TempText.length - 1; index++) {
            if (TempText.substr(index, 1) == ".") {
                DotPosition = index
            }
        }
        if (DotPosition == 99) {
            DotPosition = TempText.length
            TempText = "" + TempText + ".0000000000"
        } else {
            TempText = "" + TempText + "0000000000"
        }
        if (decimals == 0) {
            TempText = convertToText(Math.round(parseFloat(TempText)))
            TempText = TempText.substr(0, DotPosition - 0)
        } else {
            TempNum = parseFloat(TempText)
            for (let index = 0; index < decimals; index++) {
                TempNum = TempNum * 10
            }
            TempNum = Math.round(TempNum)
            for (let index = 0; index < decimals; index++) {
                TempNum = TempNum / 10
            }
            TempText = convertToText(TempNum)
            DotPosition = 99
            for (let index = 0; index <= TempText.length - 1; index++) {
                if (TempText.substr(index, 1) == ".") {
                    DotPosition = index
                }
            }
            if (DotPosition == 99) {
                DotPosition = TempText.length
                TempText = "" + TempText + ".0000000000"
            } else {
                TempText = "" + TempText + "0000000000"
            }
            TempText = TempText.substr(0, DotPosition + (decimals + 1))
        }
        if (decimals == 0) {
            if (TempText.length < digits + 1) {
                for (let index = 0; index < digits + 1 - TempText.length; index++) {
                    TempText = " " + TempText
                }
            }
        } else {
            if (TempText.length < digits + 2) {
                for (let index = 0; index < digits + 2 - TempText.length; index++) {
                    TempText = " " + TempText
                }
            }
        }
        if (decimals == 0) {
            if (TempText.length > digits) {
                if (TempText.substr(0, 1) == " ") {
                    TempText = TempText.substr(1, TempText.length - 1)
                }
            }
        } else {
            if (TempText.length > digits + 2) {
                if (TempText.substr(0, 1) == " ") {
                    TempText = TempText.substr(1, TempText.length - 1)
                }
            }
        }
        if (decimals == 0) {
            if (TempText.length > digits) {
                TempText = "-"
                for (let index = 0; index < 10; index++) {
                    if (TempText.length < digits) {
                        TempText = "" + TempText + " "
                    }
                    if (TempText.length < digits) {
                        TempText = "" + TempText + "-"
                    }
                }
            }
        } else {
            if (TempText.length > digits + 2) {
                TempText = "-"
                for (let index = 0; index < 10; index++) {
                    if (TempText.length < digits) {
                        TempText = "" + TempText + " "
                    }
                    if (TempText.length < digits) {
                        TempText = "" + TempText + "-"
                    }
                }
            }
        }
        return TempText
    }
}
