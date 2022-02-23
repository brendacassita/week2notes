// CRUD ACTION
// CREATE READ(DISPLAYING/GETTING) UPDATE DESTROY
// REACT(STATE) JS, we can't mutate state when doing this

// {name:string, competed:boolean, id: number(unique)}
// THIS SHOULD NOT BE CHANGED
const originalTodos = [
  { id: 1, todo: "eat", completed: false },
  { id: 2, todo: "sleep", completed: true },
  { id: 4, todo: "taco", completed: true },
];

// in vanilla do crud actions on this

// CREATE 
const newTodo = { id: 3, todo: "code", completed: false }

// this works for this case, This is bad for react state
// we do not want to mutate this state
// todos.push(newTodo)

// clone todos and add newTodo to clone
let newTodos = [newTodo, ...originalTodos]

// console.log('originalTodos:', originalTodos)
// console.log('newTodos:', newTodos)

// UPDATE (toggle complete)
// mutates originalTODOs
// originalTodos[1].completed = !originalTodos[1].completed 

let updatedTodos = originalTodos.map((todo)=> {
    if(todo.id === 2){
        return {...todo,completed: !todo.completed}
    }
    return todo
})

console.log('originalTodos:' ,originalTodos)
console.log('updatedTodos:', updatedTodos)
/// function defintion
function updateIfID2(turkey){
    if(turkey.id === 2){
        return {...turkey, completed: !turkey.completed }
    }
    return turkey
}


let updatedTodos1 = originalTodos.map(updateIfID2)
console.log('updatedTodos1',updatedTodos1)





const filteredTodos = originalTodos.filter((x)=> x.id !==2 )

let nums = [1,2,3,4]
nums.filter((y)=> { y > 2})

/////////////////////



// calling the function

// let x = updateIfID2({id:3, completed:false, x:234})
// let y = updateIfID2({id:2, completed:true, x:234})
// console.log(x)
// console.log(y)


const filter = (arr, callback)=>{
   let filteredArray = []
   for(let i =0; i<arr.length; i++){
       let currentThing = arr[i]
       // expecting it to return true or false
       if(callback(currentThing)){
         filteredArray.push(currentThing)
       }
   }
   return filteredArray
}



console.log('--------------------')

function isEven(num){
    return num % 2 === 0
}

let evens = filter([1,2,3,4,5], isEven)
let odds = filter([1,2,3,4,5], (x)=> x%2 !==0)
let things = filter([{id:2, t:'eat', c:true},{id:1, t:'eat', c:false} ], (x)=> x.c)
let things1 = filter([{id:2, t:'eat', c:true},{id:1, t:'eat', c:false} ], isCKeyTrue)
console.log(evens)
console.log(odds)
console.log(things)
console.log(things1)

////////////////

// function def
function isCKeyTrue(thing){
    return thing.c
}


let foo = isCKeyTrue({c:true})
console.log(foo)

// 0
// null
// undefined
// ''
// NaN
// false