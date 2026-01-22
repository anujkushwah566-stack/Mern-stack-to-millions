// function myCode() {
//     return new Promise((resolve, reject)=>{
//         if(12 === 12)
//         {
//             resolve("My code is success")
//         }
//         else {
//             reject("My code is failed")
//         }
//     })
// }

// console.log("one")
// const x = myCode()

// x.then((msg)=>{
//     console.log(msg)
// })

// .catch((err)=>{
//     console.log(err)
// })

// console.log("three")


//********************************************************************************************************** */

// console.log("one")

// setTimeout(()=>{
//     console.log("two")   // Asynchronus statement
// } ,3000)

// console.log("three")

// console.log("one")

// setTimeout(()=>{
//     console.ydtfgn()   // Error in Asynchronus statement
// } ,3000)

// console.log("three")

// function myCode() {
//     console.log("two")
// }

// console.log("one")
// myCode()
// console.log("three")


function myCode() {
    return new Promise((resolve, reject) => {
         if(12 === 12)
         {
            resolve('My code is success')
         }
         else{
            reject('My code is Failed')
         }
    })
}

console.log("one")
const x = myCode()

x.then((msg)=>{
 console.log(msg)
})
.catch((err)=>{
 console.log(err)
})
console.log("three")