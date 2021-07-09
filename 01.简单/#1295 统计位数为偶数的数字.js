/*
 * @Author: your name
 * @Date: 2020-09-06 16:13:56
 * @LastEditTime: 2020-09-06 16:16:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1295 统计位数为偶数的数字.js
 */
/**
 * 给你一个整数数组 nums，请你返回其中位数为 偶数 的数字的个数。
 * 
 * 示例 1： 
 *  输入：nums = [12,345,2,6,7896]
 *  输出：2
 *  解释：
 *  12 是 2 位数字（位数为偶数） 
 *  345 是 3 位数字（位数为奇数）  
 *  2 是 1 位数字（位数为奇数） 
 *  6 是 1 位数字 位数为奇数） 
 *  7896 是 4 位数字（位数为偶数）  
 *  因此只有 12 和 7896 是位数为偶数的数字
 * 
 * 示例 2：
 *  输入：nums = [555,901,482,1771]
 *  输出：1 
 *  解释： 
 *  只有 1771 是位数为偶数的数字。
 * 
 * 提示：
 *  1 <= nums.length <= 500
 *  1 <= nums[i] <= 10^5
 */

var findNumbers = function(nums) {
  let str = nums.map(item => {
      return String(item)
  })
  let result = str.filter(item => {
      return item.length % 2 === 0
  })
  return result.length
};

/**
 * 102 / 104 个通过测试用例
 * 执行用时: 64 ms
 * 内存消耗: 35.5 MB
 * 超过91%
 */