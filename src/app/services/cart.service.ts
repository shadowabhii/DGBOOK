import { Injectable } from '@angular/core';
import Books from '../Components/Entity/Books';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  books: Books[]=[];

  addToCart(product: Books) {
    this.books.push(product);
  }

  getItems() {
    return this.books;
  }

  clearCart() {
    this.books = [];
    return this.books;
  }

  

  constructor() { }
}
