const _ = require("./node_modules/underscore/underscore-min")

var compiled = _.template("<p> hello: <%= name + msg %></p>");
console.log(compiled({name: 'David', msg: '<br><b>Nice to meet you</b>'}));
