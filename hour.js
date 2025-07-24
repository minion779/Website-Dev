var d = new Date();
document.getElementById("display").innerHTML = d;

var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var dys = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var origDay = d.getDay();

var customDay;
switch(origDay) {
    case 0:
        customDay = 0;
    break;
    case 1:
        customDay = 6;
        break;
    case 2:
        customDay = 5;
        break;
    case 3: 
        customDay = 4;
        break;
    case 4: 
        customDay = 3;
        break;
    case 5: 
        customDay = 2;
        break;
    case 6: 
        customDay = 1;
        break;
    default:
        customDay = -1
}



