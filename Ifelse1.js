let number1 = Math.floor(Math.random()*900)+100;
let number2 = Math.floor(Math.random()*900)+100;
let number3 = Math.floor(Math.random()*900)+100;
let number4 = Math.floor(Math.random()*900)+100;
let number5 = Math.floor(Math.random()*900)+100;

console.log("Number1 = " , number1);
console.log("Number2 = " , number2);
console.log("Number3 = " , number3);
console.log("Number4 = " , number4);
console.log("Number5 = " , number5);

let min = 0;
let max = 0;

if(number1>number2 && number1>number3 && number1>number4 && number1>number5){
  max =number1;
}else if(number2>number1 && number2>number3 && number2>number4 && number2>number5){
  max = number2;
}else if(number3>number1 && number3>number2 && number3>number4 && number3>number5){
  max =number3;
}else if(number4>number1 && number4>number2 && number4>number3 && number4>number5){
  max =number4;
}else if(number5>number1 && number5>number2 && number5>number3 && number5>number4){
  max =number5;
}

if(number1<number2 && number1<number3 && number1<number4 && number1<number5){
  min =number1;
}else if(number2<number1 && number2<number3 && number2<number4 && number2<number5){
  min = number2;
}else if(number3<number1 && number3<number2 && number3<number4 && number3<number5){
  min =number3;
}else if(number4<number1 && number4<number2 && number4<number3 && number4<number5){
  min =number4;
}else if(number5<number1 && number5<number2 && number5<number3 && number5<number54){
  min =number5;
}

console.log("Max = ",max);
console.log("Min = ",min);