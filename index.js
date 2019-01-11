console.log(Object.prototype.toString.call('123')); //[object String]
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call({})); //[object Object]
console.log(Object.prototype.toString.call(function() {})); //[object Function]
console.log(Object.prototype.toString.call(new Date())); //[object Date]
console.log(Object.prototype.toString.call(true)); //[object Boolean]

// 为什么不在实例上直接调用toString方法用来判断类型
console.log([1, 2, 3].toString()); // 1,2,3
console.log('123'.toString()); // 123

// 接下来我们手动去掉对象原型链上的toString方法
console.log(Array.prototype.hasOwnProperty('toString')); //true
console.log([1, 2, 3].toString()); // 1,2,3
// 手动删除数据原型上的toString方法
delete Array.prototype.toString;
console.log(Array.prototype.hasOwnProperty('toString')); // false
console.log([1, 2, 3].toString()); // [object Array]
