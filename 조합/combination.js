//조합
const getCombinations = (arr, selectNumber) => {
    const result = [];
    
    if (selectNumber === 1) return arr.map((val) => [val]);

    arr.forEach((fixed, index, origin) => {
        //fix 를 제외한 나머지 순열
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
        const combinations = getCombinations(rest, selectNumber - 1);

        // fixed 한 값에 구해온 순열 구하기
        const attached = combinations.map((combination) => [fixed, ...combination])
        result.push(...attached);
    })
    return result;
}