///class is a program code template for creating objects. 
///These objects will have some states(variables) and some behavior(functions) inside it.
 

// class myclass{
//     constructor(){}
//     mymethod(){}
// }
// let myObj=new myclass();

class Tatacar{
    start(){
        console.log("Engine started");
    }
    stop(){
        console.log("Engine stopped");
    }
    setBrand(brand){
        this.brand=brand;
    }
}
let mycar=new Tatacar();
mycar.setBrand("Harrier");
