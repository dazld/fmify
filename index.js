var bulk = require('bulk-require');

var sections = bulk(__dirname, ['fms/**/*.fm']);
console.log(sections);

