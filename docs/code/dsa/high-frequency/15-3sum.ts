function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    const result: number[][] = [];
    const map = new Map<number, number>();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const uniqueNums = Array.from(map.keys()).sort((a, b) => a - b);
    for (let i = 0; i < uniqueNums.length; i++) {
        const x = uniqueNums[i];
        if (x === 0 && map.get(x) >= 3) { //[x, x, x]
            result.push([0, 0, 0])   
        }
        if (map.get(x) >= 2) { //[x, x, z]
            const z = -2 * x;
            if (z && map.has(z)) { // 避免与前面大于等于三次重复
                result.push([x, x, z])
            }
        }
        for (let j = i + 1; j < uniqueNums.length; j++) { //[x, y, z]
            const y = uniqueNums[j];
            const z = -x - y;
            if (z > y && map.has(z)) {
                result.push([x, y, z])
            }
        }
    }
    return result
};