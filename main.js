const newBookBtn = document.getElementById("new-book-btn");
const popupForm = document.getElementById("popup-form");
const closeFormBtn = document.getElementById("close-form-btn");
const bookForm = document.getElementById("book-form");
const bookCards = document.getElementById("book-cards");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  bookCards.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h1");
    title.textContent = book.title;
    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    const read = document.createElement("p");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    const readBtn = document.createElement("button");
    readBtn.textContent = book.read ? "Mark as Unread" : "Mark as Read";
    readBtn.style.backgroundColor = book.read ? "#4CAF50" : "#FF0000";
    readBtn.classList.toggle("read-btn--read", book.read);
    readBtn.addEventListener("click", () => {
      book.toggleReadStatus();
      displayBooks();
    });
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(readBtn);
    card.appendChild(removeBtn);
    bookCards.appendChild(card);
  }
}

newBookBtn.addEventListener("click", () => {
  popupForm.classList.add("active");
});

closeFormBtn.addEventListener("click", () => {
  popupForm.classList.remove("active");
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  popupForm.classList.remove("active");
});

// sample data for testing
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, true));
addBookToLibrary(new Book("To Kill a Mockingbird", "Harper Lee", 324, true));
