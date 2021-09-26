/*
 * @Author: your name
 * @Date: 2021-09-26 14:19:24
 * @LastEditTime: 2021-09-26 14:20:32
 * @LastEditors: Please set LastEditors
 * @Description: #21 合并两个有序链表
 * @FilePath: \LeetCode\01.简单\#21 合并两个有序链表.js
 */

/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
  let list = new ListNode(-1);
  let pre = list;

  while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
          pre.next = l1;
          l1 = l1.next;
      } else {
          pre.next = l2;
          l2 = l2.next;
      }
      pre = pre.next;
  }

  pre.next = l1 !== null ? l1 : l2;
  return list.next;
};


/*
208 / 208 个通过测试用例
状态：通过
执行用时: 76 ms
内存消耗: 39.2 MB
*/