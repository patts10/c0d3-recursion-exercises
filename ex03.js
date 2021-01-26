// Write a function named countToMe that call console.log for every 
// number from 8 to the input number.

// countToMe(10)
// /*
// 8
// 9
// 10
// */

const countToMe = ( input, counter = 8 ) => {
  if( counter > input) {
    return;
  }
  console.log( counter );
  return countToMe( input, counter + 1 );
}

countToMe(10);