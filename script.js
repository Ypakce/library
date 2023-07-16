const bookContainer = document.querySelector(".book-container");

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = myLibrary.length;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function display() {
    while(bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.firstChild);
    }

    if(myLibrary.length > 0){
        for(let book of myLibrary){
            createBook(book);
        }
    }

    else{
        return 0;
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
        myLibrary.splice(book.id, 1);
        display();
    });

    read.addEventListener("click", () => {
        book.read = !book.read;
        display();
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
display();