let arr = [4,'word','localization','internationalization','pneumonoultramicroscopicsilicovolcanoconiosis'];
let arrOfSpeit = arr =>{
  let testArr =[];
   for (let index = 0; index < arr.length; index++) {
     if ( typeof arr[index] === 'string') {
       if (arr[index].length < 10 ) {
         testArr.push(arr[index]);
         } else{
           let firstLetter = arr[index][0];
           let lastLetter = arr[index][arr[index].length-1];
           let countOfLetter = arr[index].length-2;
           let wordOfSpelt = firstLetter+countOfLetter+lastLetter;
           testArr.push(wordOfSpelt);  
         }
        }
      }
      return testArr;
    }
let abrv = arrOfSpeit(arr);
for (let index = 0; index < abrv.length; index++) {
  console.log(abrv[index]);
}