
class User {
    constructor(name, age, profession) {
        this.name = name
        this.age = age
        this.profession = profession
    }
    greet() {
        console.log(`Welcome ${this.name}`)
    }
}

const user = new User("Sandeep", 17, "DEMON KING")

console.log(user.name)
console.log(user.age)
console.log(user.profession)
user.greet()
