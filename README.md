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
我们可以明显看书该数据类型是什么。


