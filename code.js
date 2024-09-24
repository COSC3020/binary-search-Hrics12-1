function binarySearch(list,element){
    if(list.length < 0){
        return -1;
    }
    let left = 0; //first pointer
    let right = list.length = -1; // second pointer
    let mid = ((left+right)/2);// middle index

    while (left<=right){
        if (list[mid] === element) {
        while (mid > 0 && list[mid - 1] === element){

            mid--;
        }
        return mid;
    }
        else if (list[mid] < element)
            left = mid + 1;
        else
            right = mid - 1;


    }
        return -1;
}
