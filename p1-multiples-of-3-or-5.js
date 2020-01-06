/*
Find the sum of all the multiples of 3 or 5
below the provided parameter value number
*/

//Method 1: Using 'rest' and Array.keys() to generate number, used filter to check the condition the reduced it.
function multiplesOf3and5(number) {
    return [...Array(number).keys()].filter(n => (n % 3 == 0) || (n % 5 == 0)).reduce((a,b) => a+b, 0)
}
multiplesOf3and5(1000);
multiplesOf3and5(49);
multiplesOf3and5(19564);
multiplesOf3and5(8456);

// Use for loop to generate number, checked condition with if statement and the increment sum
let sum = 0;
function multiplesOf3and5_v2(number) {
  for(i = 0; i < number; i++){
    if(i % 3 === 0 || i % 5 == 0) sum+=i;
  }
  return sum;
}

multiplesOf3and5_v2(1000);
multiplesOf3and5_v2(1000);
multiplesOf3and5_v2(49);
multiplesOf3and5_v2(19564);
multiplesOf3and5_v2(8456);
 
  