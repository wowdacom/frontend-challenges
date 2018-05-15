const Mustache = require("mustache")

var view = {
  name: "Jim",
  sayHi: function () {
    return "Hello" + this.name
  }
}

var output = Mustache.render("Here comes {{ name }}! {{ sayHi }}", view);
console.log(output)
