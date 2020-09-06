/*
 * @Author: your name
 * @Date: 2020-09-06 16:08:01
 * @LastEditTime: 2020-09-06 16:12:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#1389 按既定顺序创建目标数组.js
 */
/**
 * 
 * 给你两个整数数组 nums 和 index。你需要按照以下规则创建目标数组：
 *  目标数组 target 最初为空。
 *  按从左到右的顺序依次读取 nums[i] 和 index[i]，在 target 数组中的下标 index[i] 处插入值 nums[i] 。
 *  重复上一步，直到在 nums 和 index 中都没有要读取的元素。
 * 请你返回目标数组。
 * 题目保证数字插入位置总是存在。
 * 
 * 示例 1：
 *  输入：nums = [0,1,2,3,4], index = [0,1,2,2,1]
 *  输出：[0,4,1,3,2]
 *  解释：
 *  nums       index     target
 *  0            0        [0]
 *  1            1        [0,1]
 *  2            2        [0,1,2]
 *  3            2        [0,1,3,2]
 *  4            1        [0,4,1,3,2]
 * 
 * 示例 2：
 *  输入：nums = [1,2,3,4,0], index = [0,1,2,3,0]
 *  输出：[0,1,2,3,4]
 *  解释：
 *  nums       index     target
 *  1            0        [1]
 *  2            1        [1,2]
 *  3            2        [1,2,3]
 *  4            3        [1,2,3,4]
 *  0            0        [0,1,2,3,4]
 * 
 * 示例 3：
 *  输入：nums = [1], index = [0]
 *  输出：[1]
 * 
 * 提示：
 *  1 <= nums.length, index.length <= 100
 *  nums.length == index.length
 *  0 <= nums[i] <= 100
 *  0 <= index[i] <= i
 */

var createTargetArray = function (nums, index) {
  let i = []
  nums.map((item, ind) => {
      if (i[index[ind]] === undefined) {
          i[index[ind]] = item
      } else {
          i.splice(index[ind], 0, item)
          
      }
  })
  return i
};

/**
 * 44 / 44 个通过测试用例
 * 执行用时: 76 ms
 * 内存消耗: 32.5 MB
 * 超过54%
 */

