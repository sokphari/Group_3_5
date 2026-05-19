class Student{
    // data member
    //access modifier public
    id;
    name;
    gender;
    address;
    phone;
    //funciton member
    output(){
        console.log(" id = " + this.id)
        console.log(" name = " + this.name)
        console.log(" gender = " + this.gender)
        console.log(" address = " + this.address)
        console.log(" phone = " + this.phone)
    }
}
let student = new Student();
student.id = 1;
student.name = "vannak";
student.gender = "female";
student.address = "phnum penh";
student.phone = "098765432";

student.output()



// fullname call OOP =  object oriented programming
// sort code clean clean structure easy bug find error
// type oop it 4 : encapsolation , inheritance , abstract , polymo
// basic 2: class & object 