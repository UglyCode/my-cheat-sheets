function bubbleSort(array) { // O(n^2)
    for (let i = 0; i < array.length ; i++){
        let currElem = array[0];
        for (let j = 1; j<array.length; j++){
            if (currElem > array[j]) {
                array[j-1] = array[j];
                array[j] = currElem;
            } else {
                currElem = array[j];
            }
        }
    }
}