//write a function that would allow you to do this

/*var addSix = createBase(6);
addSix(10);// returns 16
addSix(21);// returns 27
*/
console.log('hi')

function createBase(num){
    return function (innerNum){
         return (num+innerNum)

    }

}
var addSix = createBase(6)
console.log(addSix(10))  //
console.log(addSix(21))  //27


///how to use closure to ptimize time of code
function find(index) {
    let a = [];
  for (let i = 0; i < 1000000; i++) { a[i]= i*i }

  console.log(a[index])
}
/*
console.time("6");
find(6); // this takes 37ms
console.timeEnd("6");
console.time("12");
find(12); // this takes 135ms
console.timeEnd("12");
*/

function optiFind(index){
    let a = [];
    for (let i = 0; i < 1000000; i++) {
         a[i]= i*i 
    }
    //console.log(a[index])
    return function(){
        console.log(a[index])

    
}
   
}
//console.time("6");
let a=optiFind(6);
//console.log(a)
a() // this takes 0.25 ms
/*
console.timeEnd("6");
console.time("12");
optiFind(12); // this takes 0.025ms
console.timeEnd("12");
*/

for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
     // console.log(i); // What is logged?
    }, 1000);
  }

  //out //333
// if we use let then it makes lexical scope with every setout function

//using closure  //using var

for(var i=0;i<3;i++){
    
   function inner(i){
    setTimeout(function log() {
         console.log(i); // What is logged?
       }, 1000);

   }
   //inner(i)
}
//let j=1
//good question
//to call function only olnce
function isCall(){
    let flag=true
    return function(){
        if(flag==true){
            console.log('first time called')
            flag='false'
        }
        else
        console.log('already called')
       
    }
}
let know=isCall()
know()
//know()
//know()
//let view;
function likeTheVideo(){
    let called = 0;

    return function(){
        if(called>0){
            console.log("Already called");
        }
        else{
          //  view="Roadside Coder"
            called++;
            console.log("first time called")
        }
    }
}

//let isSubscribe = likeTheVideo()

//isSubscribe() // first time called
//isSubscribe() // Already Subscribed
