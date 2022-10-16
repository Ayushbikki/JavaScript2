/*let arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(Infinity);
console.log(arr2)
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());


//arr4.flat(4);
//console.log(arr4)*/
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
const arr1 = [0, 1, 2, [3, 4]];
function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
      // pop value from stack
      const next = stack.pop();
      if (Array.isArray(next)) {
        // push back array items, won't modify the original input
        stack.push(...next);
      } else {
        res.push(next);
      }
    }
    // reverse to restore input order
    return res.reverse();
  }
 // console.log(flatten(arr1))

  function flatten1(arr){
    flattedArray= arr.reduce((acc,item)=>{
      
        if(Array.isArray(item)){
            acc=acc.concat(flatten1(item))

        }
        else{
           //acc=[...acc,item]
           acc.push(item)
        }
     return acc;
       

  },[])


    return flattedArray

  }
  console.log(flatten1(arr1))