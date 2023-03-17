var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (age) {
        this.age = age;
    };
    return User;
}());
var user = new User();
user.setName("Sandeep");
user.setAge(100);
console.log(user.getName());
console.log(user.getAge());
