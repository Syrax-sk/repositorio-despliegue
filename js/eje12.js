// eje12.js
function fnMaximoVectorFor(array) {
    if (array.length === 0) return null;

    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

export { fnMaximoVectorFor };