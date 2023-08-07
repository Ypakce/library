const bookContainer = document.querySelector(".book-container");
const popUp = document.querySelector(".pop-up");
const returnButton = document.querySelector(".return");
const addBookButton = document.querySelector("#add-book-button");
const form = document.getElementById("form");

let myLibrary = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        read: true,
    },
    {
        title: "A Game Of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false,
    },
];

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const checkbox = document.getElementById("read").checked;

    const book = new Book(title, author, pages, checkbox);
    myLibrary.push(book);
}

function display() {
    while(bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.firstChild);
    }

    for(let book of myLibrary){
        createBook(book);
    }
}

function createBook(book){
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    bookCard.classList.add("book-card");
    remove.classList.add("remove-button");

    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    remove.textContent = "Remove";

    if(book.read){
        read.textContent = "Read";
        read.classList.add("read-button");
    }
    else{
        read.textContent = "Not Read";
        read.classList.add("not-read-button");
    }

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(remove);
    bookContainer.appendChild(bookCard);

    remove.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        display();
    });

    read.addEventListener("click", () => {
        book.read = !book.read;
        display();
    })
}

returnButton.addEventListener("click", () => {
    popUp.style.display = "none";
});

addBookButton.addEventListener("click", () => {
    popUp.style.display = "block";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    popUp.style.display = "none";

    addBookToLibrary();
    display();
    form.reset();
});

display();