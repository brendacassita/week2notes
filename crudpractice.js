// DATA
let drinks = [
  {id:1, name:'vodka', price:10},
  {id:2, name:'tequila', price:15}, 
  {id:3, name:'whiskey', price:10},
  {id:4, name:'beer', price:5}
]


// RETURN A STRING
// const aboutDrinks= (spirits)=>{
// return drinks.map((spirits)=>{
//   return `${spirits.name} is ${spirits.price}`
// })
// }
// console.log(aboutDrinks())
// console.log('-----------')


// ADD A DRINK
// const addDrink=(drink)=>{
//   return [...drinks, drink]
// }
// console.log(drinks, {id:5, name:'sake', price:5})
// console.log('-----------')


// // ADD ANOTHER DRINK // cant get to print menu + added wine
// const addDrink2 = (drinks, id,name,price)=>{
//   return [addDrink, {id,name,price}]
// }
// const newestMenu = addDrink2 (drinks, 6, 'wine', 5)
// console.log('newest menu w/ wine added: ', newestMenu)



// UPDATE DRINK id1 PRICE
const updateDrink1=(drinks, id, price)=>{
  let updatedDrinkPrice = drinks.map((drinks)=>{
    if(drinks.id === id){
      return {...drinks, price: drinks.price+5}
  }
  return drinks
})
return updatedDrinkPrice
}
console.log('old drink price', drinks)
console.log('updated drink prices: ', updateDrink1(drinks, 1, 15))








// UPDATE DRINK NAME


// FILTER
// REMOVES DRINK ID1

// FILTER
// REMOVES DRINK OVER 10$
