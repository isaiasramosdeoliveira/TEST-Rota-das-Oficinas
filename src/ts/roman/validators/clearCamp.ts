export function clearCamp(){
    const camp = document.querySelector("#valueCamp") as HTMLInputElement
    camp.value = '';
    return '00'
}