const myLibrary = [

    // add more books here -- for testing DOM only, input fields are added to dynamically add books now
]


// Constructor function to add book dynamically
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// populated array gets added to the table
function addArrayToTable(){
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const row  = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button onClick=editBook(${index})>Edit</button></td>
            <td><button onClick=deleteBook(${index})>Delete</button></td>
        `;
        //tableBody.appendChild(row);
        tableBody.insertAdjacentElement('afterbegin', row);
    })
}

// push the values gathered from input to the array
function addOrEditBookInArray(){
    // DOMs for input fields
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    // Encapsulating value in variables
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;

    // condition to check if all the fields are filled in
    if(title && author && pages){
        const newBook = new Book(title, author, pages);

        if(editIndex !== null){
            myLibrary[editIndex] = newBook;
            // editIndex = null;
        }
        else{
            //push the input value to the array
            myLibrary.push(newBook);    
        }
        
        // table population with updated push
        addArrayToTable();

        // clear the input fields
        titleInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
    }
    else{
        alert(`Please fill in all the fields to add this book in library.`)
    }
}

let editIndex = null;

function editBook(index){
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    const selectedBook = myLibrary[index];

    titleInput.value = selectedBook.title;
    authorInput.value = selectedBook.author;
    pagesInput.value = selectedBook.pages;

    editIndex = index;

}

// handling book deletion from the array (table)
function deleteBook(index){
    myLibrary.splice(index, 1);
    addArrayToTable();    
}

// initial population -- can remove this if you wanna start your table empty (without any data. initially)
addArrayToTable();