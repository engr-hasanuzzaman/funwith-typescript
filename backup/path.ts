import path from 'path';
console.log(path.sep);

const filePath = path.join('test', 'sub-test', 'foo.text');
console.log(`print the file path ${filePath}`);

const absPath = path.resolve(__dirname, filePath);
console.log(`absolute path is ${absPath}`);
