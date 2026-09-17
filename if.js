function getResult(mark,passMark=40){
    if(mark>=80){
        return "A";
    }else if(mark>=60){
        return"B";
    }else if(mark>=passMark){
        return"C";
    }else{
        return "F";
    }

}
console.log(getResult(99));