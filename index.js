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
    if (index === 2) {
      const cell = document.createElement("td");
      const statusButton = document.createElement("button");
      statusButton.addEventListener("click", () => {
        if (statusButton.value === "read") {
          statusButton.value = "not read";
        } else {
          statusButton.value = "read";
        }
      });
      statusButton.textContent = data;
      cell.appendChild(statusButton);

      row.appendChild(cell);
    } else {
      const cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    }
  });

  tableBody.appendChild(row);

  mylibrary.push(newBook);
});

mylibrary.forEach((book) => {
  const row = document.createElement("tr");

  Object.values(book).forEach((data, index) => {
    if (index === 2) {
      const cell = document.createElement("td");
      const statusButton = document.createElement("button");
      statusButton.value = data;
      statusButton.textContent = data;

      statusButton.addEventListener("click", () => {
       
        if (statusButton.value === "read") {
          console.log("test");
          statusButton.value = "not read";
          statusButton.textContent = statusButton.value;
        } else if (statusButton.value === "not read"){
          statusButton.value = "read";
          statusButton.textContent = statusButton.value;
        }
      });
      
      cell.appendChild(statusButton);
      row.appendChild(cell);
    } else {
      const cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    }
  });

  tableBody.appendChild(row);
});
