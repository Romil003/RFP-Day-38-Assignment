let number = 1331;

function checkPalindrome(number){
  var temp = number;
  let reverse = 0;
while(number>0){
  let remainder = parseInt(number%10);
  reverse = reverse*10+remainder;
  console.log("Reverse =>" + reverse);
  number = parseInt(number/10);
  console.log("number will be =>" + number);
}
if(temp==reverse){
  console.log(temp+" is palindrome number.");  
}else{
  console.log(temp+" is not palindrome number.");
}
}

checkPalindrome(999);