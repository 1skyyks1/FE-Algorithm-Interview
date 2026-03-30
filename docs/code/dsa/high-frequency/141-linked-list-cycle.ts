/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    let a: ListNode | null = head;
    let b: ListNode | null = head;
    while(b && b.next){
        a = a!.next;
        b = b.next.next;
        if(a === b){
            return true;
        }
    }
    return false;
}