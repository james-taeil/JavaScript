const permutation = (arr, selectNumber) => {
    const result = [];
    if (selectNumber === 1) {
        return arr.map(el => [el])
    }

    arr.forEach((fix, idx, arr) => {
        const restArr = arr.filter((el, index) => idx !== index);
        const permutations = permutation(restArr, selectNumber - 1);
        const combineFix = permutations.map(el => [fix, ...el]);
        result.push(...combineFix);
    })
    return result;
}