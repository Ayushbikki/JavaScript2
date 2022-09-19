let car={
    color:'red',
    company: 'maruti'
}

 function getCar(currency,price){
    console.log(`purchase ${this.color} - ${this.company} for ${currency}-${price}`)
}



//getCar.call(car,'$',2000)

Function.prototype.mycall = function(context={},...args){
    if(typeof this!== "function"){
        throw new Error(this + 'is not a function')
    }
    context.fn=this
    context.fn(...args)
   

}
Function.prototype.myApply = function(context={},args=[]){
    if(typeof this!== "function"){
        throw new Error(this + 'is not a function')
    }
    if(!Array.isArray(args)){
        throw new Error ('is not array type')
    }
    context.fn=this
    context.fn(...args)
}
getCar.mycall(car,'$',3000)
getCar.myApply(car,['$',5000])
console.log(getCar.bind(car,'@',7000))  // return copy of function

Function.prototype.myBind()= function(context={},args={}){
    
}
