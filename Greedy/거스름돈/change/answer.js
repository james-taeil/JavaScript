function change(price) {
    let coins = [500, 100, 50, 10]
    let count = 0;
    for (let coin of conis) {
        count += parseInt(price / coin)
        price = parseInt(price % coin)
    }
    return count
}