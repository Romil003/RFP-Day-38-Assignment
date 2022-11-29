let inputYear = 2022;

function checkLeapYear(inputYear){

    if(inputYear>999 && inputYear<10000){

        if(inputYear%4==0&&inputYear%100!=0){
            console.log("Leap year.",inputYear)
        }else if(inputYear%400==0){
            console.log("Leap year ",inputYear)
        }else{
            console.log(inputYear," is not a leap year")
        }
    }else{
        console.log("Enter 4 digit year.")
    }
    }
    
checkLeapYear(2022);