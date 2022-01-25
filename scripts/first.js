let count=0;

document.getElementById("counter").innerHTML=count;

function increment(){
    count=count+1;
    document.getElementById("counter").innerHTML=count;
}
function decrement(){
    count=count-1;
    document.getElementById("counter").innerHTML=count;
}