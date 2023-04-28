const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputStatus = document.getElementById("status");

const addButton = document.getElementById("add-book");
const bookTable = document.getElementById("book-table");
const tableBody = bookTable.querySelector("tbody");

// eslint-disable-next-line prefer-const, no-unused-vars
let mylibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
    status: "read",
  },
  {
    title: "Song of Ice and Fire",
    author: "George R R Martin",
    status: "read",
  },
  {
    title: "Harry Potter",
    author: "Something idk",
    status: "not read",
  },
];

console.log(mylibrary);

function Book(title, author, status) {
  this.title = title;
  this.author = author;
  this.status = status;
}

addButton.addEventListener("click", () => {

  const newBook = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputStatus.value
  );

  const row = document.createElement("tr");
  
  Object.values(newBook).forEach((data, index) => {
    const cell = document.createElement("td");
    if (index === 2) {
      const statusButton = document.createElement("button");
      statusButton.classList.add("status-button");
      statusButton.value = data;
      statusButton.textContent = statusButton.value;

      statusButton.addEventListener("click", () => {
        if (statusButton.value === "read") {
          statusButton.value = "not read";
          statusButton.textContent = statusButton.value;
        } else if (statusButton.value === "not read") {
          statusButton.value = "read";
          statusButton.textContent = statusButton.value;
        }
      });

      cell.appendChild(statusButton);

      row.appendChild(cell);
    } else {
      cell.textContent = data;
    }

    row.appendChild(cell);
  });

  const deleteButton = document.createElement("button");
  const cell = document.createElement("td");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "delete";


  cell.appendChild(deleteButton);
  row.appendChild(cell);
  tableBody.appendChild(row);

  mylibrary.push(newBook);
});

mylibrary.forEach((book, i) => {
  const row = document.createElement("tr");

  Object.values(book).forEach((data, index) => {
    const cell = document.createElement("td");

    if (index === 2) {
      const statusButton = document.createElement("button");
      statusButton.classList.add("status-button");
      statusButton.value = data;
      statusButton.textContent = statusButton.value;
      statusButton.addEventListener("click", () => {
        if (statusButton.value === "read") {
          statusButton.value = "not read";
          statusButton.textContent = statusButton.value;
        } else if (statusButton.value === "not read") {
          statusButton.value = "read";
          statusButton.textContent = statusButton.value;
        }
      });
      cell.appendChild(statusButton);
      row.appendChild(cell);
    } else {
      cell.textContent = data;
    }

    row.appendChild(cell);
  });

  const deleteButton = document.createElement("button");
  const cell = document.createElement("td");
  deleteButton.classList.add("delete");

  deleteButton.textContent = "delete";

  // deleteButton.addEventListener("click", () => {
  //   mylibrary = mylibrary.filter((_, bookIndex) => bookIndex !== i);
  // });

  cell.appendChild(deleteButton);
  row.appendChild(cell);
  tableBody.appendChild(row);
});
