let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  let title = prompt("Enter the book title:");
  let author = prompt("Enter the book author:");
  let pages = prompt("Enter the number of pages:");

  let book = { title: title, author: author, pages: pages };
  myLibrary.push(book);

  console.log("Book added:");
  console.log(book);
  console.log("All myLibrary:");
  console.log(myLibrary);
  // do stuff here
}

function displayBooks() {
  let bookDisplay = document.getElementById("book-display");

  // Clear previous bookDisplay content
  bookDisplay.innerHTML = "";

  // Loop through the myLibrary array
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    // Create a new div for the book card
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Add the book title, author, and page count to the card
    let title = document.createElement("h2");
    title.textContent = book.title;
    bookCard.appendChild(title);

    let author = document.createElement("p");
    author.textContent = "by " + book.author;
    bookCard.appendChild(author);

    let pages = document.createElement("p");
    pages.textContent = book.pages + " pages";
    bookCard.appendChild(pages);

    // Add the book card to the bookDisplay
    bookDisplay.appendChild(bookCard);
  }
}

myLibrary.push({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
});

myLibrary.push({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
});

myLibrary.push({ title: "1984", author: "George Orwell", pages: 328 });

displayBooks();

const newBookBtn = document.getElementById("new-book-btn");
const popupForm = document.getElementById("popup-form");
const closeFormBtn = document.getElementById("close-form-btn");
const bookForm = document.getElementById("book-form");

newBookBtn.addEventListener("click", () => {
  popupForm.style.display = "block";
});

closeFormBtn.addEventListener("click", () => {
  popupForm.style.display = "none";
});

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  // Do something with the book data, like adding it to a database or displaying it on the page
  console.log({ title, author, pages, read });
  bookForm.reset();
  popupForm.style.display = "none";
});
