function insertionSort(array) {
    for (let i = 1; i < array.length; i++){
        let index = i;
        while (index > 0 && array[index] < array[index-1]){
            swap(array, index, index-1);
            index--;
        }
    }
}

function swap(array, index1, index2){
    let temp = array[index2];
    array[index2] = array[index1];
    array[index1] = temp;
}