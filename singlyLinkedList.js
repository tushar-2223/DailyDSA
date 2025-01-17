// <========= Helper class and functions for singly linked list =========>

class Node {
  constructor(data1, next1 = null) {
      this.data = data1;
      this.next = next1;
  }

  
}
// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
  }
  console.log('null');
}
function genrateLinkedListToArr(arr) {
  let head = new Node(arr[0]);
  let temp = head;
  for (let i = 1; i < arr.length; i++) {
      temp.next = new Node(arr[i]);
      temp = temp.next;
  }
  return head;
}

//***************  Merge two sorted linked lists ***************

function sortTwoLinkedLists(list1, list2) {
  const dummyNode = new Node(-1);
  let temp = dummyNode;

  // Traverse both lists simultaneously
  while (list1 !== null && list2 !== null) {
      if (list1.data <= list2.data) {
          temp.next = list1;
          list1 = list1.next;
      } else {
          temp.next = list2;
          list2 = list2.next;
      }
      // Move the temporary pointer to the next node
      temp = temp.next;
  }

  if (list1 !== null) {
      temp.next = list1;
  } else {
      temp.next = list2;
  }
  
  // Return the head of the merged list
  return dummyNode.next;
}

let list1 = genrateLinkedListToArr([1, 2, 4]);
let list2 = genrateLinkedListToArr([1, 3, 4]);

let mergedList = sortTwoLinkedLists(list1, list2);

printLinkedList(mergedList);