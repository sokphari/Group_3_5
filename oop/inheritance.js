// what is inheritance ?


class Animal{
    name;
    color;
    constructor(name,color){
        this.name = name
        this.color = color
    }
   show(){
    console.log('Name = ' + this.name)
    console.log('Color = ' + this.color)
   } 
}

class Dog extends Animal{
    price;
    qty;
    created_at;
    constructor(price,qty,created_at,name,color){
        super(name,color)
        this.price = price
        this.qty = qty
        this.created_at = created_at
    }
    showAll(){
        console.log("name = " + this.name )
        console.log("color = " + this.color )
        console.log("price = " + this.price )
        console.log("qty = " + this.qty )
        console.log("created_at = " + this.created_at )
    }
}
let animal = new Animal()

let d = new Dog(1200,20,"2026/05/14","Ah lok","black")
d.showAll()


// animal.name = "A"
// animal.color = "black"
// console.log(animal.name)