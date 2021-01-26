// Look at the code below and try to figure out how to use fun1. 
// Next, write some code that calls fun1.

// // fun1 runs b (2nd argument) x times
// fun1(99, () => { 
//   console.log("hello") 
// })

const fun1 = (number, fun)=> {
  if( number <= 0 ){
    return;
  }

  fun();

  return fun1( number -1, fun );
}

fun1(99, () => { 
  console.log("hello") 
})
