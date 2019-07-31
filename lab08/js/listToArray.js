export default function listToArray(list) {
    let arr = [];
    while(list!= null && list.value != null) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}