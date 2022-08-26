







let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    document.getElementById("myLabel").innerHTML = "Hello " + username;
    console.log(username);
}






















