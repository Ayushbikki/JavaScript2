// famous interview


const fuser ={
    firstName: 'ayush',
    getName(){
        const firstName='bikki'
        return this.firstName
    }
}
console.log(fuser.getName())  //ayush 


function makeUser(){
    return{
        name:"john",
        ref:this,
    }
}
let user3=makeUser()
console.log(user3)  // ref is pointing to window  return sate  here ref is global object as there is no immediate global obj
//console.log(makeUser())
console.log(user3.ref.name)   // blank  as user3.ref is pointing to global obj
