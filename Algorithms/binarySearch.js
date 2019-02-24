console.log("Binary search");

const array = [22, 55, 89, 233, 453, 561, 789, 1000];

let beg = 0;
let end = array.length-1;

let target = 22;
let flag = false;

while(beg<=end){
    let mid = Math.floor((beg + end)/2);
    if(array[mid] === target){
        console.log("Element found at location " + mid);
        flag = true;
        break;
    }else if(array[mid] > target){
        end = mid - 1;
    }else {
        beg = mid + 1;
    }
}

if(!flag){
    console.log("Element not found");
}