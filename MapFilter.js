const arr = [1, 2, 3, 4];


// MAP
function doubleIt(currentElement) {
    return currentElement * 2;
}


// FILTER
function isEven(currentElement) {
    return currentElement % 2 === 0;
}


let filterArr = arr.filter(isEven);

console.log(filterArr);

// To run JS files
// Use ctrl + alt + n
