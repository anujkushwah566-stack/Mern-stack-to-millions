 const type = {
    'Content-Type': 'applocation/json',
  }

   // ye function isliye banaya ki barr stringyfy ka use na karna pade
   const getMessage = (msg) => {
     return JSON.stringify({
       mesagge: msg,
     })
   }

  module.exports = {
    type , getMessage
  }