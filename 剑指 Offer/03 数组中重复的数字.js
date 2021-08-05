/*
 * @Author: your name
 * @Date: 2021-08-05 13:38:32
 * @LastEditTime: 2021-08-05 13:40:09
 * @LastEditors: Please set LastEditors
 * @Description: 03 数组中重复的数字
 * @FilePath: \LeetCode\剑指 Offer\03 数组中重复的数字.js
 */

/*

找出数组中重复的数字。

在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，
但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // 方法一、
  // let include = [];

  // for (let l = 0; l < nums.length; l++) {
  //     if (!include.includes(nums[l])) {
  //         include.push(nums[l]);
  //     } else {

  //         return nums[l];
  //     }
  // }

  // 速度贼快、
  // 执行用时：76 ms
  // 在所有 JavaScript 提交中击败了 95.25% 的用户内存消耗：45.6 MB
  // 在所有 JavaScript 提交中击败了 24.26% 的用户
  let set = new Set(),
    len = nums.length;
  for (let l = 0; l < len; l++) {
    if (!set.has(nums[l])) {
      set.add(nums[l]);
    } else {
      return nums[l];
    }
  }
};
