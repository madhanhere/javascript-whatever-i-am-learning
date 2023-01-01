const space = {
    x: 42,
    printName: function() {
        return  this.x;
    }
};

const printName = space.printName;
console.log(printName());


const printNameWithBindFunc = printName.bind(space);
console.log(printNameWithBindFunc());
