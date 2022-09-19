//console.log('this is class');

class Classuser {
    constructor(n){
        this.name=n
    }
    getName(){
        console.log(this.name)
    }
    // arrow function cannot be used in class function
}
const User = new Classuser('ayush')

User.getName()

// 
