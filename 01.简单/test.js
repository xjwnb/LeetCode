/*
 * @Author: your name
 * @Date: 2021-09-24 17:27:08
 * @LastEditTime: 2021-09-26 16:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \LeetCode\01.简单\test.js
 */
var name = "123";
(function () {
  if (typeof name === "undefined") {
    var name = "456";
    console.log("good " + name);
  } else {
    console.log("Hello " + name);
  }
})();
