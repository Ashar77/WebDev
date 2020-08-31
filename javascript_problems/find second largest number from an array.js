var arr = [6,7,9,1,3,9,6,5,8,9,4,2,6];
sortArr = arr.sort();
console.log(sortArr);
largestNum = sortArr.pop();
console.log(largestNum);

for(let i=0;i<sortArr.length;i++){
    if (sortArr[i] == largestNum){
        console.log('yes');
        sortArr.pop(i);
    
    }
}

console.log(sortArr);

var secondLargest = sortArr.pop()
console.log('the second largest number is: ' + secondLargest);