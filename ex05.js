// Write a function named numberedHello that returns a string with the
// same number of "hello" as a given number.

// numberedHello(5) // "hellohellohellohellohello"
// numberedHello(0) // ""
// numberedHello(-4) // ""

const numberedHello = ( number, word = '' ) => {
  if(number < 1){
    return word;
  }

  return numberedHello( number - 1, word + 'hello');
}

console.log(numberedHello( 5 ));