/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null)
    return null;

  var tmp = [];
  while (head) {
    tmp.push(new ListNode(head.val));
    head = head.next;
  }

  k %= tmp.length;

  var res = [];
  if (k)
    res = tmp.slice(-k);

  tmp.splice(-k, k);

  Array.prototype.unshift.apply(tmp, res);

  for (var i = 0; i < tmp.length - 1; i++)
    tmp[i].next = tmp[i + 1];

  return tmp[0];
};