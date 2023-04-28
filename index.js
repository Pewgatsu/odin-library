const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const addButton = document.getElementById("add-book");
const bookTable = document.getElementById("book-table");
const tableBody = bookTable.querySelector('tbody');

// eslint-disable-next-line prefer-const, no-unused-vars
let mylibrary = [
  {
    title: "The Hobbit",
    author: "JRR Tolkien",
  },
  {
    title: "Song of Ice and Fire",
    author: "George R R Martin",
  },
  {
    title: "Harry Potter",
    author: "Something idk",
  },
];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

addButton.addEventListener("click", () => {
  const newBook = new Book(inputTitle.value, inputAuthor.value);
  const row = document.createElement('tr');
  Object.values(newBook).forEach( (data) => {
    const cell = document.createElement('td');
    cell.textContent = data;
    row.appendChild(cell);
  })

  tableBody.appendChild(row);

  mylibrary.push(newBook);
});


mylibrary.forEach(book => {
    const row = document.createElement('tr');

    Object.values(book).forEach( (data) => {
        const cell = document.createElement('td');
        cell.textContent = data;

        row.appendChild(cell);
    })

    tableBody.appendChild(row);
});
