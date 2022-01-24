const math = require('./myMath');
const path = require('./myPath');

console.log('add: ', math.add(3, 5));
console.log('subtract: ', math.subtract(3, 5));
console.log('multiply: ', math.multiply(3, 5));
console.log('divide: ', math.divide(3, 5));

console.log('join: ', path.join('/path', '/to', 'test.txt'));
console.log('extname: ', path.extname('/path/to/test.txt'));
console.log('basename: ', path.basename('/path/to/test.txt'));
console.log('dirname: ', path.dirname('/path/to/test.txt'));
console.log(
    'relative: ',
    path.relative('path1/app/layout/views/wow/home.html', '/layout/index.html')
);

console.log('test', path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
