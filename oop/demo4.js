class Test{
    // getter and setter 
    #name
    #color
    #price
    #qty

    setName(name){
        this.#name = name
    }
    getName(){
        return this.#name;
    }

    setColor(color){
        this.#color = color
    }
    getColor(){
        return this.#color;
    }

    setPrice(price){
        this.#price = price;
    }
    getPrice(){
        return this.#price;
    }

    setQty(qty){
        this.#qty = qty;
    }

    getQty(){
        return this.#qty;
    }
}
let dog = new Test()

dog.setName("husky")
dog.setColor("White")
dog.setPrice(1999)
dog.setQty(4)
console.log("My dog name is = " + dog.getName() +
 " color = " + dog.getColor() + " Price = " 
 + dog.getPrice() + " Qty = " + dog.getQty() )