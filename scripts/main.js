'use strict';

//Global object to store any settings if necessary.

//Declare display object to store display elements

const display = {
	addBookButton: document.querySelector('.add-book'),
	libraryWrapper: document.querySelector('.library-wrapper'),
	addBookModal: document.querySelector('.add-book-modal'),
	closeModal: document.querySelector('.close-modal')
}

//Create library to store books.

const bookLibrary = [];

//Create book constructor.

function Book(title, author, pages, haveRead = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
	this.index = bookLibrary.length;
}

//Create a test book

const theThrobbit = new Book('The Throbbit Grizz', 'Grobble Moddle', 6969, false);


//Create a function to add book to the library.

const addBookToLibrary = (book) => bookLibrary.push(book);

//Add the test book to the library now!

addBookToLibrary(theThrobbit);

const cheeseLord = new Book('Cheese Lord', 'Yo Mamma', 311, true);

addBookToLibrary(cheeseLord);

//Helper function to create book card

const createBookCard = (book) => {
	const libraryWrapper = display.libraryWrapper;
	const bookCard = document.createElement('div')
	const bookTitle = document.createElement('H2');
	const bookAuthor = document.createElement('H3');
	const pageCount = document.createElement('p');
	const buttonWrapper = document.createElement('div');
	const haveReadDiv = document.createElement('div');
	const deleteBookDiv = document.createElement('div');
	bookCard.setAttribute('class', 'book-card');
	bookCard.setAttribute('data-title', book.title);
	bookTitle.setAttribute('class', 'book-title');
	bookTitle.innerText = book.title;
	bookAuthor.setAttribute('class', 'book-author');
	bookAuthor.innerText = `by ${book.author}`;
	pageCount.setAttribute('class', 'page-count');
	pageCount.innerText = `${book.pages} pages`;
	buttonWrapper.setAttribute('class', 'button-wrapper');
	haveReadDiv.setAttribute('class', 'have-read');
	deleteBookDiv.setAttribute('class', 'delete-book');
	haveReadDiv.append((book.haveRead) ? 'Have Read' : 'Not Read');
	deleteBookDiv.append('DELETE');
	buttonWrapper.append(haveReadDiv), buttonWrapper.append(deleteBookDiv);
	bookCard.append(bookTitle, bookAuthor, pageCount, buttonWrapper);
	libraryWrapper.append(bookCard);
}

//Create function that loops over the library and adds all books to display.

const populateLibraryWrapper = () => {
	bookLibrary.forEach(book => createBookCard(book));
}

populateLibraryWrapper();

display.addBookButton.addEventListener('click', () => {
	return display.addBookModal.classList.add('active');
});

display.closeModal.addEventListener('click', () => {
	return display.addBookModal.classList.remove('active');
});