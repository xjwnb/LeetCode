/*
 * @Author: your name
 * @Date: 2020-09-06 22:21:43
 * @LastEditTime: 2020-09-06 22:24:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1464 数组中两元素的最大乘积.js
 */
/**
 * 给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
 * 请你计算并返回该式的最大值。
 * 
 * 示例 1：
 *  输入：nums = [3,4,5,2]
 *  输出：12 
 *  解释：如果选择下标 i=1 和 j=2（下标从 0 开始），则可以获得最大值，
 *  (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12 。
 * 
 * 示例 2：
 *  输入：nums = [1,5,4,5]
 *  输出：16
 *  解释：选择下标 i=1 和 j=3（下标从 0 开始），则可以获得最大值 (5-1)*(5-1) = 16 。
 * 
 * 示例 3：
 *  输入：nums = [3,7]
 *  输出：12
 * 
 * 提示：
 *  2 <= nums.length <= 500
 *  1 <= nums[i] <= 10^3
 */

var maxProduct = function (nums) {
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length - i + 1; j++) {
          if (nums[j] > nums[j + 1]) {
              var temp = nums[j]
              nums[j] = nums[j + 1]
              nums[j + 1] = temp
          }
      }
  }
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1)
};

/**
 * 104 / 104 个通过测试用例
 * 执行用时: 100 ms
 * 内存消耗: 38.2 MB
 * 超过8%
 */