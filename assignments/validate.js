
const right_passwd = "sandyblaze"
// document.querySelector("#submit-button")

function greeting(usermail, passwd) {
    let email_reg = /^[a-zA-Z0-9.]+@darwinbox.io$/
    return email_reg.test(usermail) && passwd === right_passwd
}

let res = greeting("sandeep.b@darwinbox.io", "sandyblaze")

console.log(res)

let button = document.querySelector('#submit-button')

button.addEventListener('click', function() {
    let heading = document.querySelector('#heading')
    heading.innerText = "Hello User"
    // heading.innerHTML = '<a href="#">Hello User</a>'
    const h2 = document.createElement("h2")
    h2.innerText = "Sub heading"
    heading.appendChild(h2)
})