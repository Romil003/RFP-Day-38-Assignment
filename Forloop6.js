let number = 22;
function checkPrimeFactors(input){
let count =0;
for (var i =2;i < input; i++){
  if(input%i==0){
    count = 1;
    break;
    }
}
if(count == 0){
  console.log(input);
  return true;
}else{
 return false;
}
}

for(var i =2;i<number;i++){
    if(number%i==0){
        checkPrimeFactors(i);
    }
}