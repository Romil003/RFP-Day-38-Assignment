let num1 = 3;
let num2 = 4;
let num3 = 5;

function findMaxAndMin(num1,num2,num3){
let result1 = num1+num2*num3;
let result2 = num3+num1/num2;
let result3 = num1%num2+num3;
let result4 = num1*num2+num3;
console.log("Result1 is " + result1);
console.log("Result2 is " + result2);
console.log("Result3 is " + result3);
console.log("Result4 is " + result4);
let max = 0 ;
let min = 0 ;
if (result1 > result2 && result1 > result3 && result1 > result4){
  max = result1;
  console.log("Max is " + max);
} else if (result1 < result2 && result1 < result3 && result1 < result4) {
  min = result1;
  console.log("Min is " + min);
}
if (result2 > result1 && result2 > result3 && result2 > result4){
  max = result2;
  console.log("Max is " + max);
} else if (result2 < result1 && result2 < result3 && result2 < result4) {
  min = result2;
  console.log("Min is " + min);
}
if (result3 > result1 && result3 > result2 && result3 > result4){
  max = result3;
  console.log("Max is " + max);
} else if (result3 < result1 && result3 < result2 && result3 < result4) {
  min = result3;
  console.log("Min is " + min);
}
if (result4 > result1 && result4 > result2 && result4 > result3){
  max = result4;
  console.log("Max is " + max);
} else if (result4 < result1 && result4 < result2 && result4 < result3) {
  min = result4;
  console.log("Min is " + min);
}

}

findMaxAndMin(3,4,5);