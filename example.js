//?Q.1 check if multiple of 6 or not.
let x=prompt("Enter a number")
 if(x%6===0){
    console.log(x," is  divisible 6 ")
 }
 else{
    console.log("is  not divisible by 6")
 }


//?Q.2 greade system 90-100(A),70-89(B),60-69(C),50-59(D),<49(F)

let score=prompt("enter your score");
let grade;

if(score>=90&& score<=100){
    grade="A";
}
else if(score>=70&& score<=89){
    grade="B";
}else if(score>=60&& score<=69){
    grade="C";
}else if(score>=50&& score<=59){
    grade="D";
}
else{
    grade="f"
}
console.log(grade)

//? Q.3 print all the even numbers from 0 to 100.
  for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
  }

//?Q.4 create a game where you start with any random game number.
//?Ask the user to keep guessing the number until the user enters the correct value.
     let gameNum=80;
     let userNum=prompt("Enter the game number")
     while(userNum!=gameNum){
         userNum=prompt("you entered the wrong number ")
     }
    console.log("congratulation you entered the right number");  

//?Q.5 prompt the user to enter their fullname.Generate a username based on the input.Starts with @,followed by their fullname 
//? and ending by their fullname length.
    let str=prompt("Enter your fullname ");
    let res="@"+str+str.length;
    console.log(res);

//?Q.6 For a given array with mark of students ->[52,64,98,74,55,68].Find the average mark of the entire class.
       let marks=[52,64,98,74,55,68];
       let sum=0;
       for(let i=0;i<marks.length;i++){
        sum=sum+marks[i];
       }
       let avg=sum/marks.length;
       console.log(avg);
//!

       let mark=[52,64,98,74,55,68];
       let n=0;
       for(let val of mark){
       n=n+val;
       }
       let avge=n/mark.length;
       console.log(avge);

//?Q.7 For a given array with prices of 5 items ->[650,453,854,230,852,456].All items have an offer of 10% off on them.Change the array to store final price after applying the offer.
      let item=[600,453,854,230,852,456];
      for(let i=0;i<item.length;i++){
         item[i]=item[i]-item[i]*0.1;
      }
      console.log(item);

//!  
for(let i=0;i<item.length;i++){
    let offer=item[i]/10;
    item[i]=item[i]-offer;
  }
 console.log(item);

 //?Q.11 Given an array of numbers ->[1,2,3,4,5,6,7,8,9]. Write a JavaScript code to remove all the even numbers from the array.

let arr=[1,2,3,4,5,6,7,8,9]
 for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.splice(i,1);
        i--;
    }
 }
 console.log(arr);

//?Q.12 create an array to store companies-> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
// ? a. remove the first company from the array.
// ? b. remove Uber and add Ola in its place.
// ? c.Add amazon at the end.

let arr1=[ "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 arr1.shift();            //[ "Microsoft","Uber","Google","IBM","Netflix"]
 arr1.splice(1,1,"Ola");  //["Microsoft","Ola","Google",IBM","Netflix"]
 arr1.push("Amazon");     //["Microsoft","Ola","Google",IBM",""Netflix","Amazon"]


// ?Q.13 create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.
          function vowels(str){
            let count=0;
            for(i=0;i<=str.length;i++){
                if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"||str[i]==="A"||str[i]==="E"||str[i]==="I"||str[i]==="O"||str[i]==="U"){
                    count++;
                }
            }
            console.log(count);
          }
          console.log(vowels("hi this is a string"));

    //! 
                              const  vowelss=(str)=>{
                                let count=0;
                                for(const char of str){
                                    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U"){
                                        count++;
                                    }
                                }
                                return count;
                            }
                            let value2=vowelss("hi this is a string");
                            console.log(value2);
    
//?14.For a given array of numbers,print the squre of each value using the forEach loop.  
          let mul=[1,2,3,4,5];
          mul.forEach((mul)=>{
            console.log(mul*mul);  
          });
// !
      let nums=[1,2,3,4,5];

      let value=(mul)=>{
        console.log(mul*mul);
      }

      nums.forEach(value);

//?15.Given array of marks of students.Filter out the mark of students that score 90 above.
    let students=[58,94,87,62,91,95,77,83];
    let above=students.filter((val)=>{
        return val>90;
    })
    console.log(above);

//?16. Take a number n as input from user.Create an array of numbers from 1 to n.
// ? use reduce method to calculate sum of all numbers in the array.
// ?use reduce method to calculate product of all numbers in the array.

let m =prompt("enter a number");
let arr2=[];
for(let i=1;i<=m;i++){
    arr2[i-1]=i;
}
 console.log(arr2);

let add=arr2.reduce((res,cur)=>{
    return res+cur;
});

console.log("sum=",add);

let product =arr2.reduce((res,cur)=>{
    return res*cur;
});

console.log("product=",product);


//?17.Create a h1 heading element with text-"Hello this is tofan".Append"from Talcher"to this text using js.
let h1=document.querySelector("h1");
console.dir(h1.innerText);
h1.innerText=h1.innerText +" from talcher";

//?18.create 3 divs with common class name"pit".Access them and add some unique text to each of them.
let div=document.querySelectorAll(".pit");
let idx=1;
for(val of div){
    val.innerText=`unique text${idx}`;
    idx++;
}

//?19.create a new button element.Give it a text "click me",background colour of green and text colour of white.Insert the button as the first element inside the body tag.

let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="greenyellow";
btn.style.color="black";
document.querySelector("body").prepend(btn);

//?20.create a <p> tag in html,give it a class and some styling.Now create a new class in css and try to append this class to the <p> element.
// using class list.
// in css 

let pg=document.querySelector("p");

pg.classList.add("cls2");


//?21.create a toogle button that changes the screen to dark-mode when clicked and light-mode when clicked again.

let btn=document.querySelector("#tog");
let color="light";

btn.addEventListener("click",()=>{
    if(color==="light"){
        color="dark";
        // document.body.style.backgroundColor="black";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        color="light";
        document.body.style.backgroundColor="white";
    }
    console.log(color);
});

//?22.you are creating a website for ypur college .create a class user with 2 properties name and email.It also has a method called view data () that allows user to view website data.
     class User{
        constructor(name, email){
            this.name=name;
            this.email=email;
        }
        viewData(){
            console.log("this is the data")
        }
     }

     let user1= new User("John Doe","johndoe@example.com");

//?23.Create a new class called Admin which inherits from user.Add a new method called editdata to admin that allow it to edit website data.
  class Admin extends User{
        constructor(name, email){
            super(name, email);
        }
        editData(){
            console.log("this is the edited data")
        }
     }
     let admin1= new Admin("Jane Doe","janedoe@example.com");
     