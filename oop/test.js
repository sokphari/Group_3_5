class Test{
    // public
        // id;
        // name;
    // public :
    //         int id;
    //         string name;

    // private 
        #id;
        #name;

    // private :
    //         int id;
    //         string name;

    // public 
    setId(id){
        this.#id = id;
    }
    show(){
        console.log(" Id Private = " + this.#id);
    }

}
let t = new Test();
let t1 = new Test();

// t.id = 1;
t.setId(100)
t.show();