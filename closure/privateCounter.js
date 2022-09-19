function counter(){
    var counter=0

    function add(n){
        counter=counter+n
    }
    function retreive(){
        return 'count = '+ counter
    }
    return{
        add,
        retreive
    }
}
const c=counter()
c.add(5)
c.add(10)
console.log(c.retreive())