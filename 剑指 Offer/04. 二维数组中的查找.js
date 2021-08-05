/*
 * @Author: your name
 * @Date: 2021-08-05 10:02:48
 * @LastEditTime: 2021-08-05 11:00:53
 * @LastEditors: Please set LastEditors
 * @Description: 04. 二维数组中的查找
 * @FilePath: \LeetCode\剑指 Offer\04. 二维数组中的查找.js
 */

/*
  在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


示例:

现有矩阵 matrix 如下：

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

*/

/**方式一
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let len = matrix.length;
  let slen = matrix[0]?.length;
  let arr = [];
  for (let l = 0; l < len; l++) {
    if (slen === 1) {
      if (matrix[l][0] === target) {
        return true;
      }
    } else {
      if (matrix[l][0] === target || matrix[l][slen - 1] === target)
        return true;
      if (matrix[l][0] < target && matrix[l][slen - 1] > target) {
        arr.push(matrix[l]);
      } else if (matrix[l][0] > target) {
        break;
      }
    }
  }
  if (arr.length) {
    for (let j = 0; j < arr.length; j++) {
      for (let i = 0; i < slen; i++) {
        if (arr[j][i] === target) {
          return true;
        }
      }
    }
  }
  return false;
};

/**方式二
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray1 = function (matrix, target) {
  let len = matrix.length;
  let slen = matrix[0]?.length;
  for (let l = 0; l < len; l++) {
    let shiftArr = matrix?.shift();
    for (let j = 0; j < slen; j++) {
      if (shiftArr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 20;
console.log(findNumberIn2DArray(matrix, target));
