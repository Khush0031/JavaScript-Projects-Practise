const items = document.querySelectorAll(".item");
// console.log(items)

const dropList = document.getElementById("dropList");
const dragList = document.getElementById("dragList");

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

// console.log([dragList, dropList]);

[dragList, dropList].forEach((list) => {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);

  setTimeout(() => {
    e.target.classList.add("hidden");
  }, 0);
}

function dragEnd(e) {
  e.target.classList.remove("hidden");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  e.currentTarget.classList.add("hovered");
}

function dragLeave(e) {
  e.currentTarget.classList.remove("hovered");
}

function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");

  const draggable = document.getElementById(id);

  e.currentTarget.appendChild(draggable);

  e.currentTarget.classList.remove('hovered')

  sortList(dragList);
  sortList(dropList);
}

function sortList(list) {
  // const items = [...list.children];
  const items = Array.from(list.children);

  items.sort((a,b) => {
    return a.textContent.localeCompare(b.textContent);
  })

  items.forEach((item) => {
    list.appendChild(item);
  })
}