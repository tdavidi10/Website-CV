






// hello user
let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    console.log(username);
}

// Yeter in yeshar zavit
let a
let b
let c  
document.getElementById("submit").onclick = function () {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    c = Math.sqrt(a*a + b*b);
    document.getElementById("c").innerHTML = "YETER RESULT: " + c;
    console.log(c);
}

// Counter
let count = 0;
document.getElementById("inc").onclick = function () {
    count++;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("dec").onclick = function () {
    count--;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}



















