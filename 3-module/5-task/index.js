function getMinMax(str) {
  let arr = str.replace(/[, ]+/g, " ").trim().split(' ');
  let min = 0;
  let max = 0;
  for (let i=0; i<arr.length; i++) {
    let number = Number(arr[i]);
    if(!isNaN(number)) {
      if(arr[i] < min) {
        min = number;
      } 
      if(arr[i] > max) {
        max = number;
      }
    }    
  }
  let result = {
    min: min,
    max: max
  };
  return result;
}
