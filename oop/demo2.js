// class Example{
//     + property or access modifier 
//         1. public , private , protected
//     + data member
//     + method & function member 
// }
// // create object
// datatype variable = new Example()
// variable.data member



class Books{
    
    // data
    // private 
    #book_id;
    #book_name;
    #book_title;

    //special variable with method
    info(id,name,title){
        this.#book_id = id
        this.#book_name = name
        this.#book_title = title
    }
    
    // method
    show(){
        console.log("Book_id = " + this.#book_id)
        console.log("Book_name = " + this.#book_name)
        console.log("Book_title = " + this.#book_title)
    }
}
let book = new Books()
// book.book_id = 1
// book.book_name = "C++ Programming"
// book.book_title = "english"
book.info(100,"Khmer Coder","khner angor")
book.show()
