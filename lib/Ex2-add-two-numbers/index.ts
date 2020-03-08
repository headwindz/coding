
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const addTwoNumbers = (ln1: ListNode, ln2: ListNode) => {
  let root: ListNode | null = null;
  let node: ListNode | null = null;
  let keeper = 0;

  const dump = (n1: ListNode | null, n2: ListNode | null) => {
    if (n1 == null && n2 == null) {
      if(keeper === 0) {
        return root;
      }
      let newNode = new ListNode(keeper);
      if (node == null) {
        return newNode;
      }
      node.next = new ListNode(keeper); 
      return root
    }
    let val1 = (n1 && n1.val) || 0;
    let val2 = (n2 && n2.val) || 0;
    let sum = val1 + val2 + keeper;
    let currentValue = sum % 10;
    keeper = sum >= 10 ? 1 : 0;
    let newNode = new ListNode(currentValue);
    if (node == null) { // first node
      root = node = newNode;
    } else {
      node.next = newNode;
      node = node.next;
    }
    dump(n1 && n1.next, n2 && n2.next);
  }

  dump(ln1, ln2);
  return root;
}

let ln1 = new ListNode(2);
ln1.next = new ListNode(4);
ln1.next.next = new ListNode(3);

let ln2 = new ListNode(5)
ln2.next = new ListNode(6);
ln2.next.next = new ListNode(4);
console.log(addTwoNumbers(ln1, ln2))