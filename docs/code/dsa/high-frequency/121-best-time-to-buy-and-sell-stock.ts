function maxProfit(prices: number[]): number {
    let min = Infinity;
    let res = 0;
    for(const price of prices){
        res = Math.max(res, price - min);
        min = Math.min(price, min);
    }
    return res;
};