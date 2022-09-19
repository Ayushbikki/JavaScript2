var findDiagonalOrder = function(mat) {
    let m=mat.length;
    let n=mat[0].length;
    let count=0
    let count1=0
    let ans=new Array()
    let rev=new Array()
    let i
    for(let k=0;k<m;k++){
        rev=[]
        i=k;
        let j=0;
        while(i>=0){
            if(count%2==0){
                ans.push(mat[i][j])
                i=i-1;
                j=j+1;
            }
                else{
                    rev.push(mat[i][j])
                    i=i-1;
                    j=j+1;
                    rev.reverse()
                   // rev=[2,4]
                   console.log(rev)
                    ans.push(rev)
                }
                
  }
        count++;
    }
    for(let k1=1;k1<n;k1++){
        rev=[]
        let i=m-1;
        let j=k1;
        while(j<=n-1){
            if(count){
                ans.push(mat[i][j])
                j=j+1;
                i=i-1;
            }
           /* else{
                rev.push(mat[i][j])
                j=j+1;
                i=i-1;
                rev.reverse()
              //  rev=[2,4]
                ans.push(rev)
            }*/
        }
        count1++
    
    }
    return ans;
    
    
    
};
let mat=[[1,2,3],[4,5,6],[7,8,9]]
console.log(findDiagonalOrder(mat))

let arr=[[1,2,3],[4,5,6],[7,8,9]]
let x= arr.length
let y= arr[0].length
let res=new Array()
for(let i=0;i<x;i++){
    if(i%2==0){
        for(let j=0;j<arr[i].length;j++){
            res.push(arr[i][j])
        }
    }
    else{
        arr[i].reverse()
        for(let j=0;j<arr[i].length;j++){
            res.push(arr[i][j])
        }
    }
    
}
console.log('res is',res)