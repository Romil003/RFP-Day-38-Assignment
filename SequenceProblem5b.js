let lengthInft = 60;
let breadthInft = 40;
let areaInMtr = (lengthInft*0.3048) * (breadthInft*0.3048);
let numberOfAreas = 25;
let totalAreaInAcres = (areaInMtr*0.000247105)*numberOfAreas;
console.log("Area for 25 plots = " ,totalAreaInAcres," acres");