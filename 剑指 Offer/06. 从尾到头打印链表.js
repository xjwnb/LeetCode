/*
 * @Author: your name
 * @Date: 2021-08-05 16:08:15
 * @LastEditTime: 2021-08-05 16:08:41
 * @LastEditors: Please set LastEditors
 * @Description: 06. 从尾到头打印链表
 * @FilePath: \LeetCode\剑指 Offer\06. 从尾到头打印链表.js
 */

/*
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const arr = [];
  while (head) {
    arr.unshift(head?.val);
    head = head?.next;
  }
  return arr;
};
