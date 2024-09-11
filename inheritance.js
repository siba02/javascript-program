///inheritance is passing down properties & methods from parent class to child class.
/// if child and parent have same methods , child's method will be used.[method overriding]

// class parent{

// }

// class child extends parent{

// }

class person{
    eat(){
        console.log("person eating");
    }
    sleep(){
        console.log("person sleeping");
    }
    study(){
        console.log("student  not studying");
    }
    
}

class student extends person{
    study(){
        console.log("student studying");
    }
}

let siba=new student();