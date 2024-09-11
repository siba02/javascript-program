/// super keyword is used to call the constructor of it's parent class  to access the parent's properties and method.
/// super(args) .//calls parent constructor. 
/// super .parentMethod(args)

class person1{
    constructor(){
        this.man="have a car ";
        
    }
    eat(){
        console.log("person eating");
    }
    sleep(){
        console.log("person sleeping");
    }
    
}

class student extends person1{
    constructor(name,age){ // calls parent constructor.
        super();
        this.name=name;
        this.age=age;

    }
    study(){
        console.log("student studying");
    }
}

let siba=new student("ram","22");



//!Both these have same.
class person{
    constructor(name,age){
        this.man="have a car ";
        this.name=name;
        this.age=age;

        
    }
    eat(){
        console.log("person eating");
    }
    sleep(){
        console.log("person sleeping");
    }
    
}

class student1 extends person{
    constructor(name,age){ // calls parent constructor.
        super(name,age);
    }
    study(){
        console.log("student studying");
    }
}

let tofan=new student1("ram","22");