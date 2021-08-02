// 중복 순열
const permutation = (array, selectNumber) => {
    const result = [];
    if (selectNumber === 1) {
        return array.map((el) => [el])
    }
    arr.forEach((fix, idx, arr) => {
        const permutations = permutation(arr, selectNumber - 1);
        const combineFix = permutations.map((el) => [fix, ...el])
        result.push(...combineFix);

    })
    return result;
}