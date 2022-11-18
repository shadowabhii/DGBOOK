import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Books from '../Components/Entity/Books';

const BASE_URL_TO_ADD_BOOK = "http://localhost:8084/addbook"
const BASE_URL_TO_SEARCH_BOOK = "http://localhost:8084/books"
const BASE_URL_TO_SEARCH_BOOK_BY_ID = "http://localhost:8084/bookbyid/";
const BASE_URL_TO_UPADTE_BOOK="http://localhost:8084/updatebook/";
const BASE_URL_TO_SEARCH_BOOK_BY_AUTHOR_ID = "http://localhost:8084/bookByAuthorId/";
@Injectable({
  providedIn: 'root'
})
export class BooksService {


  createBook(books:Books,uploadedImage:File) {
    const formData = new FormData();
    formData.append('bookstring', JSON.stringify(books));

    formData.append('image', uploadedImage);
   
    return this.http.post(BASE_URL_TO_ADD_BOOK, formData);
  }


  getBook() {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK);
  }

  getBookById(id)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_BY_ID+id);
  }

  getBookByAuthor(id)
  {

    
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_BY_AUTHOR_ID+id);
  }

  updateBook(book,id)
  {
return this.http.put(BASE_URL_TO_UPADTE_BOOK+id,book);
  }
  constructor(private http: HttpClient) { }
}
