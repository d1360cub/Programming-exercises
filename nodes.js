/*
We define a Node as a Class that has two properties: an ID and a ParentID.

A Node nodeA is the parent of nodeB if the parentID in nodeB is the same as the id of nodeA. All the ids are unique.

After a decomposition in a previous function, we are given an array of nodes. The array isn’t sorted in any particular order. We have to identify the root, that means, the node with parentID null.

Write a function that, given an array of Nodes, returns the root node.

Sample invocation:

whoIsTheRoot([{id: 1, parentId: 2}, {id: 2, parentId: null}]) == {id: 2, parentId: null}
whoIsTheRoot([{id: 3, parentId: 7}, {id: 5, parentId: 7}, {id: 7, parentId: null}]) == {id: 7, parentId: null}
*/

function whoIsTheRoot(arr) {
  //for (let i = 0; i < arr.length; i++) {
  for (let i in arr) {
    if (arr[i].parentId === null) {
      return arr[i];
    }
  }
}

console.log(
  whoIsTheRoot([
    { id: 1, parentId: 2 },
    { id: 2, parentId: null },
  ])
);
console.log(
  whoIsTheRoot([
    { id: 3, parentId: 7 },
    { id: 5, parentId: 7 },
    { id: 7, parentId: null },
  ])
);

/*
 Now the previous function is transforming subtrees and sending us those subtrees as arrays. Therefore the root of our subtree does have a parentId, but it’s a node that isn’t inside the array that we receive as an input.

  Write a function that returns the root of the subtree.

  Sample invocation:

  whoIsTheRoot([{id: 1, parentId: 2}, {id: 2, parentId: 5}]) == {id: 2, parentId: 5}
  whoIsTheRoot([{id: 1, parentId: 2}, {id: 3, parentId: 0}, {id: 2, parentId: 3}]) == {id: 3, parentId: 0}
 */

function whoIsTheParent(arr) {
  const id = arr.map((element) => element.id);
  for (let i = 0; i < arr.length; i++) {
    if (!id.includes(arr[i].parentId)) {
      return arr[i];
    }
  }
}

console.log(
  whoIsTheParent([
    { id: 1, parentId: 2 },
    { id: 2, parentId: 5 },
  ])
);
console.log(
  whoIsTheParent([
    { id: 1, parentId: 2 },
    { id: 3, parentId: 0 },
    { id: 2, parentId: 3 },
  ])
);
