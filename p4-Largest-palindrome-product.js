function largestPalindromeProduct(n) {
    let lower = (10**n)/10;
    let upper = (10**n) - 1;
    let result = 0;
    for(let i = lower; i <= upper; i++){
      for(let x = i; x <= upper; x++){
        multi = i * x;
        if(isPalindrome(multi) && (multi > result)){
          result = multi;
        };
      }
    }
    return result;
  }
  
  function isPalindrome(number) {
    return (Number(number.toString().split('').reverse().join('')) != number) ? false : true;
  }
  
  console.time('s');
  console.log(largestPalindromeProduct(3));
  console.timeEnd('s');
  