'use strict';
//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered.
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2]
//should return [[1,2], ["2", "3"]]

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let arr2 = [1, "2", "3", 2];

//solution one
function clean(arr) {

    arr.sort((a,b)=>a-b);
    let newArr = [[].push(arr[0])];
    arr.reduce((acc,elem)=>{

        if (acc!==elem){
            newArr.push(elem);
        } else {
            let lastElem = newArr.pop();
            if (lastElem === elem){
                newArr.push([lastElem,elem]);
            } else {
                lastElem.push(elem);
                newArr.push(lastElem);
            }
        }

        return elem;
    });

    return newArr;
}

console.log(clean(arr));