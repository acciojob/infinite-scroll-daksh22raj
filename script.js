//your code here!

// Select the container (ul element)
const list = document.getElementById("list");

// Counter to keep track of items
let itemCount = 1;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initial load of 10 items
addItems(10);

// Infinite scroll event
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    // User reached bottom → add 2 more items
    addItems(2);
  }
});
