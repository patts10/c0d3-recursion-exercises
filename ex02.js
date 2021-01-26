// Write a function named countTo98 that calls console.log once 
// for every number from 0 to 98.

// countTo98()
// /*
// 0
// 1
// 2
// ...
// 98
// */

const countTo98 = (counter = 0) => {
  if(counter > 98){
    return;
  }
  console.log( counter );
  return countTo98( counter + 1 );

}

countTo98();