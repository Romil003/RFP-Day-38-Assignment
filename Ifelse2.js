var a = 4;
var b = 20;

function checkMonthAndDate(a,b){
let sum = 59;
        
if (a == 3){
  sum = sum + b;
  if (sum > 78 && sum < 90){
    console.log("true");
  }
} else if (a == 4) {
  sum = sum + 31 + b;
  if (sum > 90 && sum < 120){
        console.log("true");
  }
} else if (a == 5) {
  sum = sum + 31 + 30 + b;
  if (sum > 120 && sum < 151){
        console.log("true");
  }
} else if ( a == 6) {
  sum = sum + 31 + 30 + 31 + b;
  if (sum > 151 && sum < 172){
        console.log("true");
  }
}else {
console.log("false");
}
}

checkMonthAndDate(4,20);