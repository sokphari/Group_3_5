class Person{
    // constructor(){ // constructor defualt
    //     console.log('Welcome to etec center')
    // }
    //private
    #name
    #age
    constructor(n,a){
        this.#name = n
        this.#age  = a
    }
    show(){
        console.log(" Name = " + this.#name)
        if(this.#age >= 18){
            console.log(" She has Relationship 💗")
        }else{
            console.log(" She can't Relationship 💔")
        }
    }
}
let person = new Person("A",20)
person.show()

