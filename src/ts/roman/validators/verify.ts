import { valueOfNumbers } from "./numbers";

export function verify(value: string) {
    let res = 0;
    const dice = value.split('');
    dice.forEach((valueDice, indexDice, arrayDice) => {
        valueOfNumbers.forEach((valueNumbers, _ , arrayNumbers) => {
            if (valueDice === valueNumbers.rom) {
                const first = arrayNumbers.find(number => arrayDice[indexDice] === number.rom)!
                const second = arrayNumbers.find(number => arrayDice[indexDice + 1] === number.rom)!
                if(arrayNumbers.length == 1) res += first.value
                if(second?.value != undefined){
                    if (first?.value >= second?.value) {
                        res += first.value
                    } 
                    if (first?.value < second?.value) {
                        res -= first.value;
                    }
                } else {
                    res += first.value;
                }
            }
        })
    })
    return res
}