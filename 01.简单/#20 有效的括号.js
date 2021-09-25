/*
 * @Author: your name
 * @Date: 2021-09-25 19:20:43
 * @LastEditTime: 2021-09-25 19:21:53
 * @LastEditors: Please set LastEditors
 * @Description: #20 有效的括号
 * @FilePath: \LeetCode\01.简单\#20 有效的括号.js
 */

/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  let mapStr = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (mapStr[s[i]]) {
      res.push(mapStr[s[i]]);
    } else {
      if (s[i] === res[res.length - 1]) {
        res.pop();
      } else {
        return false;
      }
    }
  }
  return res.length > 0 ? false : true;
};


/*
91 / 91 个通过测试用例
状态：通过
执行用时: 68 ms
内存消耗: 37.4 MB
*/