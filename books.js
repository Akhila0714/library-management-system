let books = [];

// Add Book
function addBook(id, title, author) {
    const book = {
        id: id,
        title: title,
        author: author
    };

    books.push(book);
    console.log("Book added successfully");
}

// Update Book
function updateBook(id, newTitle, newAuthor) {
    const book = books.find(book => book.id === id);

    if (book) {
        book.title = newTitle;
        book.author = newAuthor;
        console.log("Book updated successfully");
    } else {
        console.log("Book not found");
    }
}

// Search Book
function searchBook(title) {
    const result = books.filter(book =>
        book.title.toLowerCase().includes(title.toLowerCase())
    );

    console.log(result);
}

// Remove Book
function removeBook(id) {
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books.splice(index, 1);
        console.log("Book removed successfully");
    } else {
        console.log("Book not found");
    }
}

// Sample data
addBook(1, "The Alchemist", "Paulo Coelho");
addBook(2, "Harry Potter", "J.K. Rowling");

searchBook("Harry");

updateBook(1, "The Alchemist - Updated", "Paulo Coelho");

removeBook(2);