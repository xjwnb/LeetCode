/*
 * @Author: your name
 * @Date: 2020-09-06 15:27:16
 * @LastEditTime: 2020-09-06 15:37:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小卡车的博客f:\Github_my_project\Leetcode\#771宝石与石头.js
 */
/**
 * 
 *  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
 * 
 *  J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
 * 
 * 示例 1:
 * 输入: J = "aA", S = "aAAbbbb"
 * 输出: 3
 * 示例 2:
 * 输入: J = "z", S = "ZZ"
 * 输出: 0
 * 
 * 注意:
 * S 和 J 最多含有50个字母。
 * J 中的字符不重复。
 */

var numJewelsInStones = function(J, S) {
  var b = J.split('')
  var s = S.split('')
  var resNum = 0
  s.map(item => {
      if (b.indexOf(item) !== -1) {
          resNum ++
      }
  })
  return resNum
};

// 结果
/**
 * 执行用时: 96 ms
 * 内存消耗: 38 MB
 * 超过24%
 */