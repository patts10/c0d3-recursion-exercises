// Write a function named tryNumRange that takes in a number and a function
// and calls the function with every number from 1 to the input number.
// If any of these return true, return true; if they all return false,
// return false.

// let res = tryNumRange(15, (e) => {
//   return e > 10 
// }) // res is true, because the input function returns 
// // true when it is called with 11

// res = tryNumRange(8, (e) => {
//   return e === 19
// }) // res is false, because passing 1-8 into 
// the input function will never return true

const tryNumRange = ( num, func ) => {
  
  if( num <= 1 ) {
    return false;
  }
  
  if( func( num ) ) {
    return true;
  }
  
  return tryNumRange(num - 1, func);
}

res = tryNumRange(-2, (e) =>{
  return e % 2 === 0
})

console.log( res );