function selectionSort(array) {
    for (let i = 0; i < array.length; i++){
        let smallestIndex = i;
        for (let j = i+1; j < array.length; j++){
            if (array[smallestIndex] > array[j]) smallestIndex = j;
        }
        const smallest = array[smallestIndex];
        array[smallestIndex] = array[i];
        array[i] = smallest;
    }
}