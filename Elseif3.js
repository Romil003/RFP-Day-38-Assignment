let a = 10;

function readNumber(a) {
if (a == 1) {
    console.log("Unit");
} else if (a == 10) {
    console.log("Ten");
} else if (a == 100) {
    console.log("Hundred");
} else if (a == 1000) {
    console.log("Thousand");
} else {
    console.log("Invalid number");
}
}

readNumber(10);