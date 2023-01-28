'use strict';

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

//Create function that loops over the library and adds all books to display.

const populateLibraryWrapper = () => {
	const libraryWrapper = display.libraryWrapper;
	const bookCard = document.createElement('div',)
}