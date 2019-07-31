import  arrayToList  from './arrayToList.js';
import  reverseArray  from './revertArray.js';
import deepEqual from './deepEqual.js';
import listToArray from './listToArray.js';
import prepend from './prepend.js';
import nth from './nth.js';

const reverseArrayTesting = function() {
    document.getElementById("testingReverseArrayResult").innerText = reverseArray(
                                                                                    document.getElementById("testingReverseArray")
                                                                                            .value
                                                                                            .split(",")
                                                                                            );
};

document.getElementById("Reverse").onclick = reverseArrayTesting;

reverseArrayTesting();

/************************************************************/
const deepEqualTesting = function() {
    const objOne = JSON.stringify(document.getElementById("objectOne").value);

    const objTwo = JSON.stringify(document.getElementById("objectTwo").value);

    document.getElementById("objectComparisionResult").innerText = deepEqual(objOne, objTwo);
}

document.getElementById("Compare").onclick = deepEqualTesting;
deepEqualTesting();

/*************************************************************/
const arrayToListTesting = function() {
    document.getElementById("arrayToListResult").innerText = JSON.stringify(arrayToList(document.getElementById("arrayForTestingToList").value.split(",")));
}
document.getElementById("toList").onclick = arrayToListTesting;
arrayToListTesting();

/*************************************************************/

const listToArrayTesting = function() {
    document.getElementById("listToArrayResult").innerText = listToArray(JSON.parse(document.getElementById("listForTestingToArray").value));
}
document.getElementById("toArray").onclick = listToArrayTesting;
listToArrayTesting();


/*************************************************************/

const prependTesting = function() {
    document.getElementById("prependResult").innerText = JSON.stringify(
        prepend(
            document.getElementById("prependValue").value,
            JSON.parse(document.getElementById("prependList").value)
        )
    );
}
document.getElementById("prepend").onclick = prependTesting;
prependTesting();


/*************************************************************/

const nthTesting = function() {
    document.getElementById("nthResult").innerText =
        nth(
            JSON.parse(document.getElementById("nthList").value),
            document.getElementById("index").value

    );
}
document.getElementById("nth").onclick = nthTesting;
nthTesting();