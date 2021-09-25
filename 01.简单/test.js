/*
 * @Author: your name
 * @Date: 2021-09-24 17:27:08
 * @LastEditTime: 2021-09-25 19:18:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\01.简单\test.js
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