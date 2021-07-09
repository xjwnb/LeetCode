/*
 * @Author: your name
 * @Date: 2020-09-06 16:02:33
 * @LastEditTime: 2020-09-06 16:05:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1480 一维数组的动态和.js
 */
/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * 
 * 示例 1：
 *  输入：nums = [1,2,3,4]
 *  输出：[1,3,6,10]
 *  解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
 * 
 * 示例 2：
 *  输入：nums = [1,1,1,1,1]
 *  输出：[1,2,3,4,5]
 *  解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
 * 
 * 示例 3：
 *  输入：nums = [3,1,2,10,1]
 *  输出：[3,4,6,16,17]
 * 
 * 提示：
 *  1 <= nums.length <= 1000
 *  -10^6 <= nums[i] <= 10^6
 */

var runningSum = function(nums) {
  var sum = 0
  var newNums = []
  nums.forEach((item) => {
      item += sum
      sum = item
      newNums.push(item)
  })
  return newNums
};

/**
 * 53 / 53 个通过测试用例
 * 执行用时: 80 ms
 * 内存消耗: 38.2 MB
 * 超过64%
 */