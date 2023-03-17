
class User {
    private name: string
    private age: number
    getName() {
        return this.name
    }
    setName(name: string) {
        this.name = name
    }
    getAge() {
        return this.age
    }
    setAge(age: number) {
        this.age = age
    }
}

const user = new User()

user.setName("Sandeep")
user.setAge(100)

console.log(user.getName())
console.log(user.getAge())