
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = matrix === undefined || matrix.length === 0 ? [] : TransformArray(matrix);

    function TransformArray(array) {
        for(let i = 1; i < array.length; i = i+2){
            array[i].reverse();
        }
        const matrixString = array.toString();

        return matrixString.split(',').map((el) => {
          return parseInt(el, 10);
        });
    }

    return result;
};