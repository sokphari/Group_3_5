class Employee{
    // private data member
    #id;
    #name;
    #gender;
    #salary;
    #position;
    info(id,name,gender,salary,position){
        this.#id = id;
        this.#name = name;
        this.#gender = gender;
        this.#salary = salary;
        this.#position = position;
        
    }
    bonus(){
        // if salary >= 1000 extra 20 %
        // if salary < 1000 extra 10 %
        if(this.#salary >= 1000){
            return this.#salary * 0.2;
        }else{
            return this.#salary * 0.1;
        }
    }
    totalSalary(){
        return this.#salary + this.bonus();
    }
    showInfo(){
        console.log("ID = " + this.#id)
        console.log("name = " + this.#name)
        console.log("gender = " + this.#gender)
        console.log("salary = " + this.#salary)
        console.log("position = " + this.#position)
        console.log("bonus = " + this.bonus())
        console.log("totalSalary = " + this.totalSalary())
    }
}
// create object
let emp1 = new Employee()
emp1.info(1,"rathanak","female",3000,"Project Manage")

let emp2 =  new Employee()
emp2.info(2,"panha","male",5000,"Project Director")

let emp3 = new Employee()
emp3.info(3,"seyha","male",8000,"CEO") 

let emp4 = new Employee()
emp4.info(4,"david","male",150,"Graphic") 

emp1.showInfo()
emp2.showInfo()
emp3.showInfo()
emp4.showInfo()


