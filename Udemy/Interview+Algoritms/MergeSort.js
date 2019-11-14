const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 11, 283, 4, 0, 11];

function mergeSort (array) {
    if (array.length < 2) {
        return array
    }
    // Split Array in into right and left
    let arrayMidle = Math.floor(array.length/2);
    let left = array.slice(0, arrayMidle);
    let right = array.slice(arrayMidle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left=[], right=[]){
    console.log('left||right',left, right);
    let i=0;
    let j=0;
    let leftL = left.length;
    let rightL = right.length;
    let mergedArray = [];

    while (true){

        if (left[i] > right[j]){
            mergedArray.push(right[j]);
            j++;
        } else {
            mergedArray.push(left[i]);
            i++;
        }

        if (i===leftL){
            for (j; j < rightL; j++){
                mergedArray.push(right[j]);
            }
            console.log('merged', mergedArray);
            return mergedArray;
        } else if (j===rightL){
            for (i; i < leftL; i++){
                mergedArray.push(left[i]);
            }
            console.log('merged', mergedArray);
            return mergedArray;
        }
    }

}


const answer = mergeSort(numbers);
console.log(answer);