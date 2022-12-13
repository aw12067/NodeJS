var buffer1 = Buffer.alloc(100);  
var buffer2 = new Buffer('FYND');
var buffer3 = Buffer.from([1,2,3,4]);

buffer1.write("i am here");//Binary Form
var a = buffer1.toString('utf-8');//Converted to String
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);
var data = bufferDest.toString('utf-8');
console.log(data);

//Slice or filter data
var bufferOld = new Buffer('INDIA IS GREAT');
var bufferNew = bufferOld.slice(0,4);
console.log(bufferNew.toString());


//Concat 2 buffer
var bufferOne = new Buffer('INDIA');
var bufferTwo = new Buffer('IS GREAT');
var bufferThree = Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferThree.toString());