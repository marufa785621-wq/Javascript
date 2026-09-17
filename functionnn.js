function checkTemperature(temperature){
    let message="";
    if(temperature<20){
        message="cold";
    }else if (temperature<=30){
        message="normal";
    }else{
        message="hot";
    }
    return message;
}
 
console.log(checkTemperature(12));
console.log(checkTemperature(25));
console.log(checkTemperature(78));