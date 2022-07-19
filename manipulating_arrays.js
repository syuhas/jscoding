/////////////// push and pop ////////////////////////////////
/////////insert and remove variables from an array //////////
//////// in this instance the array functions as a STACK ////

var arr = []
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
///////we pushed 1, 2 and 3 onto our stack

console.log(arr.pop());
console.log(arr);
//////we removed the 3 off of the end of our stack

/////////// shift and unshift are similar to push and pop ///////////////
///////// except they work at the beginning of our stack ////////////////
//////// utilizing shift and push, we effectively can create a queue ////

var queue = [];
queue.push(1);
queue.push(2);
queue.push(3); /////////we've pushed 1, 2, 3 onto our queue

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());////////each is removed starting at the beginning
console.log(queue);///////////AFTER we process with shift, the stack queue is now empty
                   ///////////the reverse of the pop method


queue = [1, 2, 3];
queue.unshift(0);///////////creates a variable at the beginning stack queue
console.log(queue);//////////the reverse of the push method