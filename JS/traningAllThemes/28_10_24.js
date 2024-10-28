import {fetch} from "node-fetch";

const newPromis=fetch('https://football.kulichki.net/')
newPromis.then((data)=>{
    console.log('data1', data)
    return fetch('https://football.kulichki.net/england/')
})
newPromis.then((data)=>{
    console.log('data2', data)
    return fetch('https://football.kulichki.net/spain/')
})
newPromis.then((data)=>{
    console.log('data3','COOL')
})

console.log('start')

const foo=async ()=>{
    const dataA=await fetch('https://football.kulichki.net/spain/')
    console.log('dataA')
    const dataB=await fetch('https://football.kulichki.net/spain/')
    console.log('dataB')
}
foo()
console.log('end')
//1-start
//2-end
//3-4-dataA/dataB
//без await ,будет 1-start 2-3-dataA/dataB 4-end
//----------------без try отлов ошибки невозможен. нет catch и finally


const foo=async ()=>{
    try{
        const dataA=await fetch('https://football.kulichki.net/spain/')
        console.log('dataA')
        const dataB=await fetch('https://football.kulichki.net/spain/')
        console.log('dataB')
    }catch (err){
        //если внутри блолка тру выпаде ошибка то сработает кетч

    }

}
foo()
console.log('end')