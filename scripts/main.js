'use strict';

const bookCard = document.createElement('div')
const bookTitle = document.createElement('H2');
const bookAuthor = document.createElement('H3');
const pageCount = document.createElement('p');

//Global object to store any settings if necessary.

//Declare display object to store display elements

const display = {
	addBookButton: document.querySelector('.add-book'),
	libraryWrapper: document.querySelector('.library-wrapper')
}

//Create library to store books.

const bookLibrary = [];

//Create book constructor.

function Book(title, author, pages, haveRead = false) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead;
}

//Create a function to add book to the library.

const addBookToLibrary = (book) => bookLibrary.push(book);

//Helper function to create book card

const createBookCard = (book) => {
	const libraryWrapper = display.libraryWrapper;
	bookCard.setAttribute('class', 'book-card');
	bookCard.setAttribute('data-title', book.title);
}

//Create function that loops over the library and adds all books to display.

const populateLibraryWrapper = () => {
	bookLibrary.forEach(book => createBookCard(book));
}