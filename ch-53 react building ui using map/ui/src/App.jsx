// const App = ()=>{
//   const tmp = [1,21,1,1,1,1,1,1]
//   return(
//     <div>
     
//       {
//         tmp.map((items , index)=>(
//            <img key={index} src="/public/images/download.jpeg" width={200}  />
//         ))
//       }
//     </div>
//   )
// }

// export default App


// const App = ()=>{
  
//   return(
//     <div className="grid grid-cols-4 gap-8">
     
//       {
//         Array(10).fill('saurav').map((items , index)=>(
//            <img key={index} src="/public/images/download.jpeg" width={200}  />
//         ))
//       }
//     </div>
//   )
// }

// export default App

const App = ()=>{
  
  const data = [
  {
    "id": 1,
    "name": "iPhone 14",
    "price": 799,
    "category": "Mobile",
    "description": "Latest Apple smartphone with A15 Bionic chip",
    "image": "https://via.placeholder.com/200?text=iPhone+14",
    "inStock": true
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S23",
    "price": 699,
    "category": "Mobile",
    "description": "Flagship Samsung phone with great camera",
    "image": "https://via.placeholder.com/200?text=Samsung+S23",
    "inStock": true
  },
  {
    "id": 3,
    "name": "OnePlus 11",
    "price": 649,
    "category": "Mobile",
    "description": "Fast and smooth performance smartphone",
    "image": "https://via.placeholder.com/200?text=OnePlus+11",
    "inStock": true
  },
  {
    "id": 4,
    "name": "MacBook Air M2",
    "price": 1199,
    "category": "Laptop",
    "description": "Lightweight laptop with Apple M2 chip",
    "image": "https://via.placeholder.com/200?text=MacBook+M2",
    "inStock": false
  },
  {
    "id": 5,
    "name": "Dell XPS 13",
    "price": 999,
    "category": "Laptop",
    "description": "Premium ultrabook with sleek design",
    "image": "https://via.placeholder.com/200?text=Dell+XPS+13",
    "inStock": true
  },
  {
    "id": 6,
    "name": "HP Pavilion 15",
    "price": 750,
    "category": "Laptop",
    "description": "Reliable everyday laptop",
    "image": "https://via.placeholder.com/200?text=HP+Pavilion",
    "inStock": true
  },
  {
    "id": 7,
    "name": "Sony WH-1000XM5",
    "price": 299,
    "category": "Accessories",
    "description": "Industry-leading noise cancelling headphones",
    "image": "https://via.placeholder.com/200?text=Sony+Headphones",
    "inStock": true
  },
  {
    "id": 8,
    "name": "Apple AirPods Pro",
    "price": 249,
    "category": "Accessories",
    "description": "Wireless earbuds with active noise cancellation",
    "image": "https://via.placeholder.com/200?text=AirPods+Pro",
    "inStock": true
  },
  {
    "id": 9,
    "name": "Logitech MX Master 3",
    "price": 99,
    "category": "Accessories",
    "description": "Advanced wireless mouse for productivity",
    "image": "https://via.placeholder.com/200?text=Logitech+Mouse",
    "inStock": true
  },
  {
    "id": 10,
    "name": "Samsung 27\" Monitor",
    "price": 299,
    "category": "Electronics",
    "description": "Full HD monitor with vibrant display",
    "image": "https://via.placeholder.com/200?text=Samsung+Monitor",
    "inStock": false
  }
]
console.log(data)

  return(
    <div className="grid grid-cols-4 gap-8">
      {
        data.map((items , index)=>(
           <div key={index} className="bg-white border border-gray-300 rounded-lg p-8 space-y-3">
              <h1 className="text-xl font-semibold">{items.name}</h1>
              <div className="bg-green-500 text-white rounded px-2 py-2 w-fit">{items.category}</div>
              <h1>{items.price}</h1>
            </div>
        ))
      }
    </div>
  )
}

export default App