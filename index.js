function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  
  return node;
}