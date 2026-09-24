function menuchoice(choice)
{
    let result="";
    
    switch(choice)
    {
        case 1:
            result="Start Game"
            break;
        case 2:
            result="Load Game"
            break;
        case 3:
            result="Settings"
            break;
        case 4:
            result="Exit"
            break;
            default:
                result="Invalid Choice"
                break;    
    }
    return result;
}

console.log("choice1:",menuchoice(1));
console.log("choice2:",menuchoice(2));
console.log("choice3:",menuchoice(3));
console.log("choice4:",menuchoice(4));
console.log("choice5:",menuchoice(5));
