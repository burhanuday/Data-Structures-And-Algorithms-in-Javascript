//Bubble sort

const bubbleSort = numbers => {
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length-1-i; j++){
            if(numbers[j]>[numbers[j+1]]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    return numbers;
}