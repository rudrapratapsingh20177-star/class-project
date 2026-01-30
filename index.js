import book from './book.js'
import members from './members.js'
import borrow from './borrow.js';
let c=borrow(123,1234);
console.log(c);
console.log("welcome to library management system");
members(123,"rudra","gold");
book(1234,"javascript","rudra",500);

