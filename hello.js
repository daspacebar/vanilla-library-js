const myLibrary = [
    {
        title: "Harry Potter",
        author: "Niket Kumar",
        pages: 345,
    }
    // add more books here
]

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addArrayToTable(){
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const row  = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <button onClick=deleteBook(${index})>Delete Book</button>
        `;
        tableBody.appendChild(row);
    })
}


function addBookToArray(){
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pageseInput = document.getElementById('pages');

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pageseInput.value;


    if(title && author && pages){
        const newBook = new Book(title, author, pages);
        
        //push the input value to the array
        myLibrary.push(newBook);

        addArrayToTable();

        // clear the input fields
        titleInput = "";
        authorInput = "";
        pageseInput = "";
    }
    else{
        alert(`Please fill in all the fields to add in library.`)
    }
}

function deleteBook(index){
    myLibrary.splice(index, 1);
    addArrayToTable();    
}

addArrayToTable();