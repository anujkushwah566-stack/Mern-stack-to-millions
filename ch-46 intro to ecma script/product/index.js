//  import {createProduct as demo, fetchProduct as hello} from "./controller/product.controller.js"

// demo()
// hello()
// // createProduct()
// // fetchProduct()

// const {title , description} = {
//     title: "blue jeans",
//     description : "hello",             // oject destructuring
//     price: 2000,
//     discount: 20
// }

// const {title : p1title , description : p1description} = {
//     title: "red shirt",
//     description : "hii",             // oject destructuring
//     price: 2000,
//     discount: 20
// }

// console.log(p1description , p1title , description , title )



// const {address : {product : {rating}}} = {
//     name : 'saurav',
//     roll  : 1,
//     subject: "maths",
//     address: {
//         city: "city1",
//         state: "state1",
//         country: "india",
//         product: {                  // nested object destructireing
//             rating : 4 ,
//             price: 400
//         }
//        }

// }
//console.log(rating)

// const [z , y] = ["saurav" , "ravi"]  // array destructuring
// //console.log(z,y)

// const [type , token] = ['Bearer' , 'hdvhsjvlsdhssdhskdsd']
// console.log(type)
// console.log(token)

// const converter = (str) => {
//   return str.toUpperCase();
// }

// const names = "Anuj Kushwah"
// const roll = 8
// const clas = 4    // templatte litrrals
// const result = `My name is ${converter(names)} my roll is ${roll} my class is ${clas}`

// console.log(result)


// const products = [
//   {
//     id: 'p1',
//     name: "iPhone 14",
//     price: 70000,
//     category: "Mobile"
//   },
//   {
//     id: 'p2',
//     name: "Samsung Galaxy S23",
//     price: 65000,
//     category: "Mobile"
//   },
//   {
//     id: 'p3',
//     name: "MacBook Air M2",
//     price: 120000,
//     category: "Laptop"
//   },
//   {
//     id: 'p4',
//     name: "Dell Inspiron",
//     price: 55000,
//     category: "Laptop"
//   },
//   {
//     id: 'p5',
//     name: "Sony Headphones",
//     price: 8000,
//     category: "Accessories"
//   }
// ];


// const result = products.filter((items)=> items.price < 100000
// )
// console.log(result)


// const first = ["saurav" , 'ravi']
// const second = ["rahul", "shreya"]
// const result = [...first , ...second]   // joining array
// console.log(result)


// const first = {
//     title: "red shirt",
//     description: "hello"
// }

// const second = {
//     price: 2000,
//     discount: 20
// }

// const product = {
//     ...first,
//     ...second
// }

// console.log(product) 

const products = [
  {
    id: 'p1',
    name: "iPhone 14",
    price: 70000,
    category: "Mobile"
  },
  {
    id: 'p2',
    name: "Samsung Galaxy S23",
    price: 65000,
    category: "Mobile"
  },
  {
    id: 'p3',
    name: "MacBook Air M2",
    price: 120000,
    category: "Laptop"
  },
  {
    id: 'p4',
    name: "Dell Inspiron",
    price: 55000,
    category: "Laptop"
  },
  {
    id: 'p5',
    name: "Sony Headphones",
    price: 8000,
    category: "Accessories"
  }
];

const x = products.map((items)=>{
 return {
    ...items,
    name : items.name.toUpperCase(),
    rating: 4
 }
})

console.log(x)