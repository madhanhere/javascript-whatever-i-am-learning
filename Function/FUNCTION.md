# **Properties of a function**
```
1. Function.prototype.length

2. Function.prototype.name

3. Function.prototype.prototype
```


**Function.prototype.length**

Returns the number of parameters expected by the function

``` 

function foo() {}

console.log(foo.length)
// output is 0

function hello(name, weclomestate){}

console.log(hello.length)
// output is 2


console.log(console.log(((a1, a2, a3, a4 = 4, a5 =5) => {}).length))
// output is 3

console.log(Function.length)
// output is 1
```

**Function.proptotype.name**

**| Writable | Enumerable | Configurable |**

**| no       | no         | yes          |**


The name property resturns the function's name  as specified when it was created, or it may be _anonymus_ or _''_ (empty) for functions which created anonymusly.

```
const wish = function () {}

const obj = {
    func: function () {}
}

console.log(wish.name);
// output is wish

console.log(obj.func.name);
// ouput is func
```

**Function.prototype.prototype**

**| Writable | Enumerable | Configurable |**

**| yes       | no         | no          |**

The prototype data property of a Function instance is used when the function used as a constructor with the new operator. It will become new object's new prototype.


When a function is called with new, the constructor prototype property will become the resulting object's prototype.

```
function Teche() {
    const inst = new Teche();

    console.loog(Object.getPrototypeOf(inst) === Teche.prototype);

    // output is true;
}
```
