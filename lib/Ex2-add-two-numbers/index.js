"use strict";
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
var addTwoNumbers = function (ln1, ln2) {
    var root = null;
    var node = null;
    var keeper = 0;
    var dump = function (n1, n2) {
        if (n1 == null && n2 == null) {
            if (keeper === 0) {
                return root;
            }
            var newNode_1 = new ListNode(keeper);
            if (node == null) {
                return newNode_1;
            }
            node.next = new ListNode(keeper);
            return root;
        }
        var val1 = (n1 && n1.val) || 0;
        var val2 = (n2 && n2.val) || 0;
        var sum = val1 + val2 + keeper;
        var currentValue = sum % 10;
        keeper = sum >= 10 ? 1 : 0;
        var newNode = new ListNode(currentValue);
        if (node == null) { // first node
            root = node = newNode;
        }
        else {
            node.next = newNode;
            node = node.next;
        }
        dump(n1 && n1.next, n2 && n2.next);
    };
    dump(ln1, ln2);
    return root;
};
var ln1 = new ListNode(2);
ln1.next = new ListNode(4);
ln1.next.next = new ListNode(3);
var ln2 = new ListNode(5);
ln2.next = new ListNode(6);
ln2.next.next = new ListNode(4);
console.log(addTwoNumbers(ln1, ln2));
//# sourceMappingURL=index.js.map