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

document.getElementById("toggle-form-btn").addEventListener("click", () => {
  const formContainer = document.getElementById("form-container");
  const toggleButton = document.getElementById("toggle-form-btn");

  if (formContainer.style.display === "none" || !formContainer.style.display) {
    formContainer.style.display = "block";
    toggleButton.textContent = "Close Form";
  } else {
    formContainer.style.display = "none";
    toggleButton.textContent = "Add Book";
  }
});

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
       <button class="remove-btn" data-index="${index}">Remove</button>
    `;

    libraryDisplay.appendChild(bookCard);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const bookIndex = e.target.dataset.index;
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    })
  );
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
