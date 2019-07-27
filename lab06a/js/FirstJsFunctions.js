//function sum() that sums all the numbers in an array of numbers.
function sum(arr) {
	return arr.reduce((a,b) => a + b, 0);
}

//function multiply() that multiplies (respectively) all the numbers in an array of numbers.
function multiply (arr){
    return arr.reduce((a,b) => a * b, 1);
}

//function reverse() that computes the reversal of a string
function reverse(str) {
    return [...str].reduce((prev,next)=>next+prev);
}

//filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i
function filterLongWords(words, i) {
    return words.filter(word => word.length >= i);
}

function myFunctionTest(expected, func) {
    const res = func.call();
    let isEqual = false;
    if (!Array.isArray(expected)) {
        isEqual = expected === res;
    } 
    else {
        isEqual = compareObjects(expected, res);
    }
    
    if (isEqual) {
        return "TEST SUCCEEDED";
    } 
    else {
        //console.assert(false, func, res)
        return "TEST FAILED." + "  Expected " + expected + " found " + res;
    } 
}

function evaluateFunction(expected, func) {
    try {
        const res = func.call();
        let isEqual = (res+"") === (expected +"");
    
        if (isEqual) {
            return "TEST SUCCEEDED";
        } 
        else {
            //console.assert(false, func, res)
            return "TEST FAILED." + "  Expected " + expected + " found " + res;
        } 
    }
    catch(err) {
        return err.message;
    }
    
}

function compareObjects(arr1,arr2){
    if(!arr1  || !arr2) return false;
    if(arr1.length  != arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            console.log(arr1[i]);
            console.log(arr2[i]);
            return false;
        }
    }

    return true;
 }

function testAllMethods () {
    //sum function test
    console.log("Expected output of sum([1,2,3,4]) is 10 " +
            myFunctionTest(10, function(){return sum([1,2,3,4]); } )
            );

    console.log("Expected output of sum([2,10,5,7]) is 24 " +
            myFunctionTest(24, function(){return sum([2,10,5,7]); } )
            );

    //multiply function test
    console.log("Expected output of multiply([1,2,3,4]) is 24 " +
            myFunctionTest(24, function(){return multiply([1,2,3,4]); } )
            );

    //reverse function test
    console.log("Expected output of reverse(\"hello\") is olleh " +
            myFunctionTest("olleh", function(){return reverse("hello"); } )
            );

    //filterLongWords function test
    console.log("Expected output of filterLongWords([\"red\", \"green\", \"blue\", \"orange\", \"yellow\", \"white\", \"black\", \"purple\", \"pink\"], 6) is [orange, yellow, purple] " +
            myFunctionTest(["orange","yellow","purple"], function(){return filterLongWords(["red", "green", "blue", "orange", "yellow", "white", "black", "purple", "pink"], 6); } )
            );

            
}

testAllMethods();

