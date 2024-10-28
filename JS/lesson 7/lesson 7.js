// import {fetch} from "node-fetch";
//
// const newPromis=fetch('https://football.kulichki.net/')
// newPromis.then((data)=>{
//     console.log('data1', data)
//     return fetch('https://football.kulichki.net/england/')
// })
// newPromis.then((data)=>{
//     console.log('data2', data)
//     return fetch('https://football.kulichki.net/spain/')
// })
// newPromis.then((data)=>{
//     console.log('data3','COOL')
// })
//
// console.log('start')
//
// const foo=async ()=>{
//     const dataA=await fetch('https://football.kulichki.net/spain/')
//     console.log('dataA')
//     const dataB=await fetch('https://football.kulichki.net/spain/')
//     console.log('dataB')
// }
// foo()
// console.log('end')
// //1-start
// //2-end
// //3-4-dataA/dataB
// //без await ,будет 1-start 2-3-dataA/dataB 4-end
// //----------------без try отлов ошибки невозможен. нет catch и finally
//
//
// const foo=async ()=>{
//     try{
//         const dataA=await fetch('https://football.kulichki.net/spain/')
//         console.log('dataA')
//         const dataB=await fetch('https://football.kulichki.net/spain/')
//         console.log('dataB')
//     }catch (err){
//         //если внутри блолка тру выпаде ошибка то сработает кетч
//
//     }
//
// }
// foo()
// console.log('end')

//all, race, any, allSettled

const prom1=fetch('http://yahoo.com')
const prom2=fetch('http://google.com')
const prom3=fetch('http://bing.com')

const bigData = Promise.all([prom1,prom2,prom3])
bigData.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('ERROROOO',err)
})
//all - должны отработать все, если хоть один не пройдет, то попадет в кетч
//race - отработает самый быстрый, положительно или отрицательно без разницы
//any как all, только наоборот. Зарезолвит первый быстрый, или вернет массив неотработанных.
//allSettled - вернет массив объектов в любом случае и покажет статус объекта и его значение.

//можно создать так...
Promise.race([fetch('http://yahoo.com'),fetch('http://google.com'),fetch('http://bing.com')
])
.then((data)=>{
    console.log(data.url)
})
.catch((err)=>{
    console.log('ERROR')
})