import { numbers } from "../numbers";
export function isRoman(value: string){
    const dice = value.split('');
    const res = numbers.includes(dice[value.length - 1]);
    return res
}