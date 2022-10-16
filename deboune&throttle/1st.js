
// debouncing limit the rate of function execute that is calling very frequently let's after particular
// secound that function or event/api get triggered
//Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately. //example constanly scrolling webpage and after certain height newsfeed get trigger i.e infinite scrolling
const btn= document.querySelector('.increment_btn');
const btnPress=document.querySelector('.increment_pressed')
const count= document.querySelector('.increment_count')

var pressedCount=0;
var triggerCount=0;



//debounce polyfill
const myDebounce= ((cb,d)=>{
    let timer;
    
    return function(...args){
        if(timer) clearTimeout(timer)
        timer= setTimeout(()=>{;
            cb(...args)
        },d)

    }

})

const myThrottle =((cb,d)=>{
    let last=0;
    return function(...args){
        let now= new Date().getTime()
        if(now-last<d) return;
        last=now;
        return cb(...args)

    }
})

// throttle polyfill


btn.addEventListener('click',()=> {
    btnPress.innerHTML=++pressedCount;
    //debounceCount()
    //throttleCount()
   // debounceCount1()
   throttleCount1()

})
 //loadash function library

 const debounceCount = _.debounce(()=>{
    count.innerHTML=++triggerCount
 },800)
 const throttleCount = _.throttle(()=>{
    count.innerHTML=++triggerCount
    //get triggered every 800 ms
 },800)

 const debounceCount1= myDebounce(()=>{

    count.innerHTML=++triggerCount;
 },800)
 const throttleCount1 = myThrottle(()=>{
    count.innerHTML=++triggerCount
    //get triggered every 800 ms
 },1000)
