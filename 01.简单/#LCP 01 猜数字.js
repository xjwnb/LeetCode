/*
 * @Author: your name
 * @Date: 2020-09-06 16:30:45
 * @LastEditTime: 2020-09-06 16:33:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#LCP 01 猜数字.js
 */
/**
 * 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。
 * 他们一共进行三次这个游戏，请返回 小A 猜对了几次？
 * 
 * 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。
 * 
 * 示例 1： 
 *  输入：guess = [1,2,3], answer = [1,2,3]
 *  输出：3
 *  解释：小A 每次都猜对了。
 * 
 * 示例 2：
 *  输入：guess = [2,2,3], answer = [3,2,1]
 *  输出：1
 *  解释：小A 只猜对了第二次。
 * 
 * 限制：
 *  guess的长度 = 3
 *  answer的长度 = 3
 *  guess的元素取值为 {1, 2, 3} 之一。
 *  answer的元素取值为 {1, 2, 3} 之一。
 */

var game = function(guess, answer) {
  let num = 0
  let t = guess.map((item, index) => {
      return item === answer[index] ? num++ : ''
  })
  return num;
};

/**
 * 4 / 4 个通过测试用例
 * 执行用时: 68 ms
 * 内存消耗: 33.7 MB
 * 超过75%
 */