//khai bao bien trong javascript
//var
//let
//const

//new: cap phat bo nho cho bien doi tuong(object variable)
var today = new Date();
var hourNow = today.getHours();
var greeting;
var year = today.getFullYear();
if(hourNow > 18){
    greeting = "Good evening";
}else if (hourNow > 12){
    greeting = "Good afternoon"
}else if(hourNow > 0){
    greeting = "Good morning";
}else{
    greeting = "Welcom";
}
// ghi thong tin ra ben ngoai Trinh duyet
document.write('<h3>'+greeting+'</h3>');
document.write('<h3>'+year+'</h3>');