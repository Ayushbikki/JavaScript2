var module= (function(){
    function privateMethod(){
        console.log('private method')
        let a='private thing'
    }
    return{

        publicMethod: function(){
            console.log(a)
            console.log('public')
        }
    }
})()
//module.privateMethod()  // will give error
module.publicMethod()