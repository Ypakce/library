let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read == true){
            return (this.title + " by " + this.author + ", " + this.pages + " pages, read");
        }
        else if(this.read == false){
            return (this.title + " by " + this.author + ", " + this.pages + " pages, not read yet");
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(myLibrary);