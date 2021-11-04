Array.prototype.removeDuplicatesAsync = async function(){
    let array =this;
 console.log( await(array.filter((a, b) => array.indexOf(a) === b)))
 
    // let b = await (arr=>{console.log(arr.filter((a, b) => arr.indexOf(a) === b))})
    //  console.log(b);
    }
    
    console.log(`start`);
    [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
    console.log(`end`);