

var user_id;

function isLoggedIn() {
    user_id = localStorage.getItem("user_id")
    console.log("loaded")
}

window.onload = function() {
    console.log("Hello")
}

window.onblur = function() {
    isLoggedIn()
    // window.history.pushState({}, 'http://www.google.com') 
}

var para = document.querySelector("#brief")
var input = document.querySelector(".form")

// input.submit()

console.log(para)
console.log(input)
for (let x of input)
    console.log(x)
