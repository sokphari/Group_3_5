// // function have two type 
// // 1.build in function 
// // 2.User define function


// //user define function
// //non return and return function

// // syntax:
// // function NameFunction(){
// //          code or statement
// // }
// function greeting(){
//     let name = "Dalin";
//     let age = 18;
//     console.log("name = "+ name + " age = " + age )
// }
// greeting()
// //function non return with param
// function info(name , class_1 , subject){
//     console.log("My name is : " + name + 
//     " study at class : " + class_1 + 
//     " Subject name :" + subject )
// }

// //calling function
// info("Lina","Web Design","JavaScript")




//Request ,
// Cus_name , Cus_gender ,
// Cus_contact , Cus_email , Cus_pss
// function Name infoCustomer()
// non return with param



// Function Return with Non Param

function sum(){
    let a = 10;
    return a;
}
let b = 100
console.log(sum() + b) // calculate with let b = 100

// function text(){ //string
//     return "My name is Khea";
// }
// console.log(text())


// function mul(){
//     let a = 10;
//     console.log(a)
// }
// let b = 100
// console.log(mul() + b) // calculator with let b =100
// // 10 or 100






//Function Return With Param
function SalaryStaff(name,sex,salary,phone_number){
    // console.log(name + sex + salary + phone_number)
    let total = 100;
       total += salary;
    return total;
}
console.log(SalaryStaff("Seyha",'Male',500,"09876543") + 400)
