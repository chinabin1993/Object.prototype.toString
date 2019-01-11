# Object.prototype.toString
## 为什么Object.prototype.toString.call()可以判断数据类型


### 在说原理之前，先了解一下，toString方法的作用

#### toString方法表示该对象的字符串。

每个对象都有一个toString，默认情况下，toString方法会被每个Object对象继承。如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中type是对象的类型。[toString方法|MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

先看下面的输出结果
```javascript
console.log(Object.prototype.toString.call('123')); //[object String]
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call({})); //[object Object]
console.log(Object.prototype.toString.call(function() {})); //[object Function]
console.log(Object.prototype.toString.call(new Date())); //[object Date]
console.log(Object.prototype.toString.call(true)); //[object Boolean]
```
我们可以明显看出该数据类型是什么。

那么我们为什么不直接使用object.toString来判断一个数据的类型呢？

我们知道，像Array这些是Object的实例，而在上文提到的toString方法会被每个Object对象继承。也就是说toString是存在原型链上的，会被每个Object的实例继承的。如果我们在Array这里实例上继续调用toString方法，相当于调用的是当前实例的toString方法。

#### 看下下方的代码
```javascript
Array.prototype.hasOwnProperty('toString'); // true
[1, 2, 3].toString(); // 1,2,3
// 手动删除数据原型上的toString方法
delete Array.prototype.toString;
Array.prototype.hasOwnProperty('toString'); //false
console.log([1, 2, 3].toString()); // [object Array]
```
可见为什么我们需要使用Object.prototype.toString 而非 实例上的toString方法来判断某种数据类型。
