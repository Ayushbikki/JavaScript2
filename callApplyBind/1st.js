

var obj={
    Name: 'ayush'
}

function display(age){
 return  `hello this is ${this.Name} ${age}` //return  `hello this is ${obj.Name}
}
console.log(display.call(obj,24))
//apeend arr2 in arr1 without taking any new arr
/*
let arr=[1,2,3]
let arr1=[4,5,6]
arr.push.apply(arr,arr1)
//let n=arr.concat(arr1) //create new arr
console.log(arr)
*/
//maximum number in array
let numbers=[77,23,64,7,17]
//console.log(Math.max(numbers))  // nan will not work on array
//console.log(Math.max(77,23,64,7,17))  //77
//apply method
//console.log(Math.max.apply(null,numbers))  //77

function f() {
    console.log( this ); // ?
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();  //window obj
  function f1(){
    console.log(this.name)
  }
  f2=f1.bind({name:'ayush'}).bind({name:'bikki'})
  f2() // it will  print ayush as there is no chaning in 

  const age=21;
  var person={
    name:"ayush",
    age:20,
    getage: function()
    {
        console.log(this.age)
    },
    getageByArrow : ()=>{
        //console.log(age) 
        console.log(this.age)   //if we don't use this.age it will give age of 21 parent
        // if no parent age then it throw Ref. error
    }
  }
  let person2={
    name:'xyz',
    age:22
  }
  person.getage() //20
  person.getage.call(person2)//22
  person.getageByArrow()  //undefined 
  person.getageByArrow.call(person2)    //undefined if this.age else global parent age 
  