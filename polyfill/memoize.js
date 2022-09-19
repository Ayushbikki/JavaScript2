function memoize(fun,context){

    let res={}
    return function(...args){
        const argsCache= JSON.stringify(args)
        if(!res[argsCache]){
            res[argsCache]= fun.call(this|| context,...args)
        }
        return res[argsCache]

    }
}
const clumsy =(num1,num2)=>{
    for(let i=0;i<10000;i++){

    }
    return num1*num2
}

console.time('first call')
console.log(clumsy(9467,7469))
console.timeEnd('first call')
console.log('second call')
console.log(clumsy(9467,7469))
console.timeEnd('second call')

/*
const memoizeClumsy = memoize(clumsy)
console.time('first call')
console.log(memoizeClumsy(9467,7469))
console.timeEnd('first call')
console.log('second call')
console.log(memoizeClumsy(9467,7469))
console.timeEnd('second call')
*/