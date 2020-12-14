const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
let items = JSON.parse(localStorage.getItem("items")) || [];
const clearAll = document.querySelector(".clear-all");

function handleSubmit(e) {
  e.preventDefault();

  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, itemsList);

  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const index = e.target.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map(({ text, done }, i) => {
      return `
      <li>
        <input type='checkbox' data-index=${i} id="item${i}" ${
        done ? "checked" : ""
      } />
        <label for="item${i}">${text}</label>
      </li>
    `;
    })
    .join("");
}

function clearAllList() {
  items = [];
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", handleSubmit);
itemsList.addEventListener("click", toggleDone);
clearAll.addEventListener("click", clearAllList);

populateList(items, itemsList);
