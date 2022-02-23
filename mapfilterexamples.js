// map - update - not removing,CHANGE something / returns new array of same length 
// filter - remove/delete something / returns same length or less
// reduce - returns any type 


// const foo =(x,y,z)=>{
//   console.log(x)
//   y.push(z) // (y needs to return an array)
//   return {x:x, y:y}
// }

// // let x = foo('a', 1) //breaks
// let y = foo('a',[1],'taco') //works
// console.log('y:', y)



// const foo =()=>{
// return 1
// }

// let x = foo()
// console.log(x)


let arr = [1,2,3,4,5]
function keep(thing){
  return thing >3
}
console.log(arr.map(keep))
console.log(arr)