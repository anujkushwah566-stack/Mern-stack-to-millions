


// function myCode() {
//     return new Promise((resolve, reject) => {
//          if(12 === 12)
//          {
//             resolve(' two ')
//          }
//          else{
//             reject('My code is Failed')
//          }
//     })
// }

//  Resolving promise asynsynchronously

// console.log("one")
// const x = myCode()

// x.then((msg)=>{
//  console.log(msg)
// })
// .catch((err)=>{
//  console.log(err)
// })
// console.log("three")


// ********************************************************************************

function myCode() {
    return new Promise((resolve, reject) => {
         if(12 === 12)
         {
            resolve(' two ')
         }
         else{
            reject('My code is Failed')
         }
    })
}

// resolveing promise synchronously

async function main() {

   try {
    console.log("one")
    const x = await myCode()
    console.log(x)
    console.log("three")
   } 
   catch (error) {
      console.log(error)
   }
  
  
}
main()