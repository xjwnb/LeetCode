/*
 * @Author: your name
 * @Date: 2020-09-06 15:46:48
 * @LastEditTime: 2020-09-06 15:50:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1512 好数对的数目.js
 */

/**
 * 
 * 给你一个整数数组 nums 。
 * 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
 * 返回好数对的数目。
 * 
 * 示例 1：
 *  输入：nums = [1,2,3,1,1,3]
 *  输出：4
 *  解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
 * 
 * 示例 2：
 *  输入：nums = [1,1,1,1]
 *  输出：6
 *  解释：数组中的每组数字都是好数对
 * 
 * 示例 3：
 *  输入：nums = [1,2,3]
 *  输出：0
 * 
 * 提示：
 *  1 <= nums.length <= 100
 *  1 <= nums[i] <= 100
 */

var numIdenticalPairs = function(nums) {
  var res = 0
  for (var i = 0; i < nums.length; i++) {
      for (var j = i+1; j < nums.length; j++) {
          if (nums[i] == nums[j]) {
              res++
          }
      }
  }
  return res
};

/**
 * 
 * 48 / 48 个通过测试用例
 * 执行用时: 100 ms
 * 内存消耗: 37.6 MB
 * 超过4%
 */