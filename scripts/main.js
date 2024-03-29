'use strict';

//Declare display object to store display elements

const display = {
	addBookButton: document.querySelector('.add-book'),
	libraryWrapper: document.querySelector('.library-wrapper'),
	addBookModal: document.querySelector('.add-book-modal'),
	addBookForm: document.querySelector('.add-book-form'),
	closeModal: document.querySelector('.close-modal'),
	submitBook: document.querySelector('#book-submit'),
	bookTitle: document.querySelector('#form-title'),
	bookAuthor: document.querySelector('#form-author'),
	bookPages: document.querySelector('#form-pages'),
	bookRead: document.querySelector('#form-read')
}

//Create library to store books.

const bookLibrary = [];

//Create a Book class with constructor & changeRead method.

class Book {
	constructor(title, author, pages, haveRead = false) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.haveRead = haveRead;
		this.index = bookLibrary.length;
	}
	
	changeRead() {
		this.haveRead = !this.haveRead;
	}
}

//Create a function to add book to the library.

const addBookToLibrary = (book) => bookLibrary.push(book);

const theThrobbit = new Book('The Gobbit', 'G.R.R Nolkien', 600, false);
addBookToLibrary(theThrobbit);
const cheeseLord = new Book('A Book About Cheese', 'Not A. Human', 311, true);
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
	const deleteIcon = document.createElement('i');
	bookCard.setAttribute('class', 'book-card');
	bookCard.setAttribute('id', `book-${book.index}`);
	bookTitle.setAttribute('class', 'book-title');
	bookTitle.innerText = book.title;
	bookAuthor.setAttribute('class', 'book-author');
	bookAuthor.innerText = `by ${book.author}`;
	pageCount.setAttribute('class', 'page-count');
	pageCount.innerText = `${book.pages} pages`;
	buttonWrapper.setAttribute('class', 'button-wrapper');
	haveReadDiv.setAttribute('class', 'have-read');
	haveReadDiv.setAttribute('id', `have-read-${book.index}`);
	haveReadDiv.setAttribute('data-read', book.haveRead);
	haveReadDiv.addEventListener('click', () => {
		book.changeRead();
		document.querySelector(`#have-read-${book.index}`).innerText = (book.haveRead) ? 'Have Read' : 'Not Read';
	});
	deleteBookDiv.setAttribute('class', 'delete-book');
	deleteBookDiv.setAttribute('data-book-index', book.index);
	deleteIcon.classList.add('fa-solid', 'fa-trash-can', 'delete-icon');
	haveReadDiv.append((book.haveRead) ? 'Have Read' : 'Not Read');
	deleteBookDiv.append(deleteIcon);
	deleteBookDiv.addEventListener('click', () => {
		document.querySelector(`#book-${book.index}`).remove();
		bookLibrary[book.index] = '';
	})
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

display.submitBook.addEventListener('click', (event) => {
	if (!display.bookTitle.value || !display.bookAuthor.value || !display.bookPages.value) return;
	const currentLibraryIndex = bookLibrary.length;
	addBookToLibrary(new Book(
		display.bookTitle.value,
		display.bookAuthor.value,
		display.bookPages.value,
		display.bookRead.checked
	));
	createBookCard(bookLibrary[currentLibraryIndex]);
	display.addBookModal.classList.remove('active');
	display.addBookForm.reset();
	event.preventDefault();
});