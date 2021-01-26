// Write a function named love that calls `console.log("The things I do for love")` 99 times.


// love()
// /*
// The things I do for love
// The things I do for love
// ... (96 times)
// The things I do for love
// */



const love = ( counter = 0) => {
  if( counter == 99 ) {
    return ;
  };
  console.log( 'The things I do for love' );
  return love( counter + 1 );
}

love();