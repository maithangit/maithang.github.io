export default function nth(list, index) {
    let i = 0;
    while(list!= null && list.value != null) {
        if (i == index)
        {
            return list.value;
        }
        list = list.rest;
        i++;
    }
    return null;
}
