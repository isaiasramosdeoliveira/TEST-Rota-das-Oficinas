import { valueOfNumbers } from "../numbers";

export function verify(value: string) {
    const dice = value.split('');
    const res = valueOfNumbers.reduce((acc, value, index) => {
        for(let i = 0; i < dice.length; i++ ){
            if(dice[i] == valueOfNumbers[index].rom){
                acc += value.value;
            }
        }
        return acc
    }, 0)
    return res
}