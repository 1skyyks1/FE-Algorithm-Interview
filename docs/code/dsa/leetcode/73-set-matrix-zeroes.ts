/**
 * 73. 矩阵置零
 * https://leetcode.cn/problems/set-matrix-zeroes/
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const rows = new Set<number>();
    const cols = new Set<number>();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    for (const row of rows) {
        matrix[row].fill(0);
    }
    for (const col of cols) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][col] = 0;
        }
    }
}