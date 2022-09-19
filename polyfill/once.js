function once(fn,context){
    let ran
    return function(){
        if(fn){
            ran = fn.apply(this|| context,arguments)
            fn=null
        }
        return ran

    }
}
const hello= ()=>{
    console.log('hello')
}
const hello1=once(()=> console.log('hello1'))
hello1()
hello1()
hello1()