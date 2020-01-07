function fiboEvenSum(n) {
    let arr = [];
    let pN = 0;
   for(let nN = 1; arr.length < n;){
     let tPN = pN + nN;
     arr.push(tPN)
     pN = nN;
     nN = tPN;
   }
   return arr.filter((n) => n % 2 == 0).reduce((a,b) => a+b, 0);
  }
  
  console.log(fiboEvenSum(10));
  console.log(fiboEvenSum(18));
  //fiboEvenSum(43) should return 350704366.
  console.log(fiboEvenSum(43));

  function fiboEvenSum_v2(n) {
      let arr = [1, 2];
      for(i = 0; arr.length < n; i++){
          arr.push(arr[i] + arr[i+1]);
      }
      return arr.filter((n) => n % 2 == 0).reduce((a,b) => a+b, 0);
  }

  console.log(fiboEvenSum_v2(10));//44
  console.log(fiboEvenSum_v2(18));//3382
  //fiboEvenSum(43) should return 350704366.
  console.log(fiboEvenSum_v2(43));
  
  