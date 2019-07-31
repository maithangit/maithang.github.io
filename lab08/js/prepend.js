export default function prepend(number, list) {
    let obj = {};
    obj.value = number;
    obj.rest = list;
    return obj;
}


