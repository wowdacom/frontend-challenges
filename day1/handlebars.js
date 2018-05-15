const Handlebars = require("handlebars")

var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Jim", "hometown": "Taiwan",
             "kids": [{"name": "Tom", "age": "3"}]};
var result = template(data);

console.log(result)
