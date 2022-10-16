let sentence1='Glib jocks quiz nymph to vex dwarf'
    console.log(sentence1.split(" ").join(""))



    console.log("Welcome to Programiz!");
    let sentence2='leetcode'
        //console.log(sentence1.split(" ").join(""))
    var checkIfPangram = function(sentence) {
        let arr = new Array(26).fill(false)
        let index;
        let n= sentence.length;
       // if(n<26) return false;
        for(let i=0;i<n;i++){
            if(sentence[i]>='a' &&  sentence[i]<='z'){
                index=sentence.charCodeAt(i)-'a'.charCodeAt(0)
                
                arr[index]=true;
                console.log(index)
            }
            console.log(index)
        }
        console.log(index)
        for(let i=0; i<=arr.length;i++){
            if(arr[i]===false) return false
        }
        return true;
        
    };
    console.log(checkIfPangram(sentence2))