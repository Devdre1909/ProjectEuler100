/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?
*/

function largestPrimeFactor(number) {
    dNumber = [2,3,5,7,11,13,17,19]
  if(dNumber.includes(number)) return number;

  let arr = []
  let arrSize = 0;
  for(let i = 2; i < Math.floor(number/2); i++){
    if((number % i == 0) && (isPrime(i))){
      arr.push(i);
    }
  }
  arrSize = arr.length;
    return arr[arrSize - 1];
}

function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
      };
  }
  return true;
}

//largestPrimeFactor(2) should return 2
console.log(largestPrimeFactor(2));
//largestPrimeFactor(3) should return 3.
console.log(largestPrimeFactor(3));
//largestPrimeFactor(5) should return 5.
console.log(largestPrimeFactor(5));
//largestPrimeFactor(7) should return 7.
console.log(largestPrimeFactor(7));
//largestPrimeFactor(13195) should return 29.
console.log(largestPrimeFactor(13195));
//largestPrimeFactor(600851475143) should return 6857.
console.time('6 digits');
console.log(largestPrimeFactor(600851475143));
console.timeEnd('6 digits');

