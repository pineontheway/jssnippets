
var sample = require('./reqSnippet');
var list = ['vijay','vinay','amma','nanna'];


for (var i = 0; i < list.length; i++) {
    s = sample.create();
    s.add(list[i]);
}
