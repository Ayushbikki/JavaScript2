//first class function : function is assigned to a variable and can be treated as a variable that's why called first called function
// basically every thing a function can do as variable do
//example of first class func

function square(n){ // here n is parameter
    return n*n
}
//console.log(square(5))  //here 5 is argument

function display(fn){
    console.log(`square is ${fn(5)}`)
   
}

display(square)


//what is IIFE   //immediately invoked function expression
/*(function peri(n){
    console.log(2*n)
})(5);*/    // it should be called before every function othet wise throw error

/*for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i)
    },i*1000)
} //1 2 3 4 5
// if it is var out will be 5(5)  as var doesn't have block scope
*/
//hoisting
/*hoist()  // even before declaration it put complete code
console.log(vHoist) // but in var it assign value undefined
function hoist(){
    console.log('hoisting')
}
var vHoist=23
*/


var x=30;
function goodQues(){
    console.log(x)
    var x=31
}
goodQues()  // undefined as it first check x for functionl scope and in functional scope x is undefined as it created after console.log


// spread vs rest
function multiply(n1,n2){
    console.log("spread",n1*n2)
}
let arr=[5,6]
multiply(...arr)  //spread operator


//difference b/w arrow & normal function
// clean syntax
//implicit return
const multi3 = (num)=> num*3

//argument
/// we cann't have argument defined in arrow func
 const fnArr =()=>{
    console.log(arguments)
 }
 function fnNor(){
    console.log(arguments)
 }
 fnNor(2,3,4)  //gives argument
 //fnArr(1,2,3) // gives reference error

 //this in global object