//two types when it comes to object binding
// 1 implicit:  using dot notation used to invoke notation using this
//explict call,bind and apply
///this keyword : refer something
//console.log(this)
this.a=5    // global object
console.log(this)   //this is global object or window object
//console.log(a)

///  function
var b=6  // if it let then it will be undefined as let is block scope

function getPara(){
    console.log(this.b)  //parent object here is window obj
    console.log(this.a)
    console.log(this)   // here parent is window obj
}
//getPara()  //6 5
const getPara1 = ()=>{
    console.log(this.a)  ////parent object here is window obj
    console.log(this.b)
}
//getPara1() // 5 6

//obj normal func
let user={
    name: "ayush",
    age: 24,
    getDetail(){
        console.log(this.name)
        console.log(this)  // here parernt obj is user obj
    },
    getDetail1: ()=>{
        console.log(this.name)
        console.log(this)

    }

    
}
user.getDetail()   //now here it target to its parent obj that is user obj  // ayush  & user obj
//user.getDetail1()   // out is blank and global obj as here parent funct is global function

//nested user
let Nesteduser={
    name: "ayush",
    age: 24,
    childObj:{
        newName: 'bikki',
         getDetail(){
            console.log(this.name, "and", this.newName)
            console.log(this)  
        },

    },
   
    
}

Nesteduser.childObj.getDetail()   // it refre to its immediate parent that is childObj
//normal function will point to its immediate parent obj 
let user1={
    name: "ayush",
    age: 24,
    getDetail (){
        const nestedArrow = ()=> {
            console.log(this.name)
            console.log(this)
        }
        nestedArrow()
    }
}
//user1.getDetail()  // ayush  here parent function is getDetail




//reme
let user4 = {
    name: "Piyush",
    age: 24,
      getDetails() {
          const self= this
          //console.log(self)
          function nestedArrow() {
              console.log(this.name); //Piyush
         
          }
           nestedArrow();
      }
  };
  //console.log(user)
  
  
  user4.getDetails()
  let user5 = {
    name: "Piyush",
    age: 24,
      getDetails() {
          const nestedArrow = () => console.log(this.name); //Piyush
          nestedArrow();
      }
  };
  user5.getDetails()
