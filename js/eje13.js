// eje13.js
function fnBuscarElementoWhile(data, value) {
    let index = 0;

    while (index < data.length) {
        if (data[index] === value) {
            return index;
        }
        index++;
    }

    return -1;
}

export { fnBuscarElementoWhile };