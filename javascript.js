const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryDisplay = document.getElementById("library-display");
  libraryDisplay.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.isRead ? "Yes" : "No"}</p>
    `;

    libraryDisplay.appendChild(bookCard);
  });
}

document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value, 10);
  const isRead =
    document.querySelector('input[name="read-status"]:checked').value ===
    "read";

  addBookToLibrary(title, author, pages, isRead);

  event.target.reset();
});

displayBooks();

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  223,
  true
);

addBookToLibrary("Dune", "Frank Herbert", 412, false);

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, true);
