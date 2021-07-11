function calculateGrains(row, col){
    var pos = row*8 + row - 8;
    console.log(`Number of grains on (${row}, ${col}) square: ${2**(pos-1)}`);
}

calculateGrains(2,2);