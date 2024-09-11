///js object have a special property called prototype.
/// we can set prototype using __proto__.
/// it is a reference to an object.
///if object and prototype have same method,object's method will be used.


const student={
    fullName:"Sibaprasad",
    age:22,
    mark :80,
    printmark:function(){
        console.log(this.mark); //This refers to the Student object (student.mark)
    }
};


const employee={
    caltax(){
        console.log("Employee Tax is 12%");
    }
};


const siba={
    salary:70000,
};

siba.__proto__ = employee;  // by setting Prototype we can use the function present in employee in siba. 