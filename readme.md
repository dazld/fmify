# Frontmatterify Demo

Using bulkify and frontmatterify to inline and require a bunch of files

## example

There are a series of `.json.fm` files in the fms folder. The index.js file here 
will try to bulk require them, then they are transformed by frontmatterify.

```
var bulk = require('bulk-require');

var sections = bulk(__dirname, ['fms/**/*.fm']);
console.log(sections);
```

..which when run produces the following output:

```
$ browserify index.js | node
{ fms:
   { 'article1.json': { attributes: [Object], body: '<h1>title</h1>\n' },
     'article2.json': { attributes: [Object], body: '<h1>title</h1>\n' } } }

```
