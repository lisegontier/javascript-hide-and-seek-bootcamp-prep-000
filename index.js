function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelector('.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].childrens
  }
}

function deepestChild() {
  
}