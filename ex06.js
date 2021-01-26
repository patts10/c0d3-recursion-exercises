// Write a function named sumEvens that adds up all the positive even
// numbers from 2 to the given number. (Use `%` to determine if each
// number is even.)

   
//     let result = sumEvens(5) // result is 6 because 4 + 2
//     result = sumEvens(1) // result is 0
    
const sumEvens = ( num, result = 0 ) => {
  if( num <= 0) {
    return result;
  }

  if( num % 2 === 0 ) {
    result = result + num;
  }

  return sumEvens( num - 1, result );
}

console.log(sumEvens( 5 ) );