// 4. Write a function named fizzbuzz that call `console.log` for every number
// from 1 to the input number. However, if the number is divisible by 3, log `"fizz"` instead
// and if the number is divisible by 5, log `"buzz"` instead. If the number is divisible by both,
// log `"fizzbuzz"`.

//     fizzbuzz(16)
//     /*
//     1
//     2
//     fizz
//     4
//     buzz
//     fizz
//     7
//     8
//     fizz
//     buzz
//     11
//     fizz
//     13
//     14
//     fizzbuzz
//     16
//     */

const fizzbuzz = ( number, counter = 1 ) => {
  if ( counter > number ) {
    return;
  }
  let message = '';
  if ( counter % 3 == 0 && counter % 5 == 0 ) {
    message = ( 'fizzbuzz' );
  } else if ( counter % 5 == 0 ){
    message = ( 'buzz' );
  } else if ( counter % 3 == 0 ) {
    message = ( 'fizz' );
  } else {
    message = ( counter );
  }
  console.log( message );
  return fizzbuzz( number, counter + 1 );

}

fizzbuzz( 16 );