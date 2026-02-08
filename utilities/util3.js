
function addConst(value,arr){
    for(let i=0;i<arr.length;i++){
        arr[i] += value;
    }
    return arr;
};

function extractFromArr(value, arr) {
    return arr.filter(item => item > value);
}    

function sumArr(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};

export {addConst, extractFromArr, sumArr};