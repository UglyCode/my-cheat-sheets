//Write a javascript function that takes an array of numbers and a target number.
//The function should find two different numbers in the array that, when added together, give the target number.
//For example: answer([1,2,3], 4)should return [1,3]

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


//recursion
function findAdded(arr, target){

    let currElem = arr.pop();
    if (!currElem) return 'no matches';

    for (i=0; i<arr.length; i++) {
        let elem = arr[i];
       if ((elem + currElem) === target) {
           return [elem, currElem];
       }
    }
    return findAdded(arr, target);

}

//no recursion with cache
function findAddedNoRec(arr, target){

    const length = arr.length;
    for (let i=0; i<length; i++) {

        let cache = new Set();
        let currElem = arr.pop();

        if (!currElem) return 'no matches';

        for (let j = 0; j < arr.length; j++) {

            let elem = arr[j];
            if (cache.has(elem)) continue;

            if ((elem + currElem) === target) {
                return [elem, currElem];
            }

            cache.add(elem);
        }
    }
    return findAdded(arr, target);

}

console.log(findAddedNoRec(arr, 393));
console.log(findAddedNoRec(arr, 501));