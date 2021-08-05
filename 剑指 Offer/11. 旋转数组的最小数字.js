/*
 * @Author: your name
 * @Date: 2021-08-05 15:21:46
 * @LastEditTime: 2021-08-05 15:22:59
 * @LastEditors: Please set LastEditors
 * @Description: 11. 旋转数组的最小数字
 * @FilePath: \LeetCode\剑指 Offer\11. 旋转数组的最小数字.js
 */

/*
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  if (!(numbers instanceof Array)) throw new Error("需要传入数组");
  let small = numbers[0];
  let len = numbers.length;
  if (len === 1) return small;
  // let res = null;
  for (let l = 0; l < len; l++) {
    if (numbers[l] < small) {
      return numbers[l];
    }
  }
  return small;
};
