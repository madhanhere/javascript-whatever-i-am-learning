// The call() method calls the function with a give this value and arguments provided individually

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);


function greet() {
    console.log("congrats " +this.name);
}

const obj = {
    name: "madhan kumar"
};

greet.call(obj);

globalThis.globalProp = "Win";

function display() {
    console.log("property value", this.globalProp);
}

display.call(); // in non strict - mode default value value in globalThis, but in strict mode it is default value undefined.

