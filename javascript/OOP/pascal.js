
const pacsal = (n) => {
  const result = [];
  let startVal = 1;
  
  for (let i = 0; i<n; i+=1) {
    if (result.length === 0) {
      result.push([1]);
      continue;
    }
    if (result.length === 1) {
      result.push([1, 1]);
      continue;
    }
    // const subArr = builder(i, result);
    // result.push(subArr)

    const line = [1];
    for (let j = 1; j<i; j+=1) {
      const prevLvl = result[i - 1];
      const item = prevLvl[j - 1] + prevLvl[j];
      console.log(item, '==')
      line.push(item);
    }
    line.push(1);
    console.log('><', line)
    result.push(line);
  }
  
  
  return result;
}

// function getMiddle(arr){
//   let mid = Math.floor(arr.length/2);
//   console.log(arr.slice(mid, mid + 2));
//   return arr.slice(mid, mid + 2);
// }
// const arr = [1,2,3,4,5,]
// console.log(getMiddle(arr))
console.log('answ:',pacsal(5))


// function builder(deep, oldArr) {
//   console.log(`Deep lvl: ${deep}, Main:`, oldArr)
//   const line = [];

//   for (let i = 1; i < (deep + 1) / 2; i+=1) {
//     // if (i === 0 || i === deep) {
//     //   line.push(startVal);
//     // }
//     const prevLvl = oldArr[i-1];
//     console.log(prevLvl, ': PrevLVL oldArr[i-1]')
//     const item = prevLvl[i - 1] + prevLvl[i];
//     console.log(item, '==')
//     line.push(item);
//   }
//   return line;
// }