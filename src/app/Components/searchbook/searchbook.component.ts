import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ReaderService } from 'src/app/services/reader.service';
import Books from '../Entity/Books';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  book: Books = new Books();
  books: Books[] = [];

  
    price:number;
    category:string;
    author:string;
  

  

  getBookByCategory(category)
  {
    console.log(category); 
    const observable=this.readerService.getBookByCategory(category);
    observable.subscribe((response) => {
      console.log(response);
      this.books = response as Books[];
    });
  }

  getBookByAuthor(author)
  {
    console.log(author); 
    const observable=this.readerService.getBookByAuthor(author);
    observable.subscribe((response) => {
      console.log(response);
      this.books = response as Books[];
    });
  }


  getBookByPrice(price)
  {
    console.log(price); 
    const observable=this.readerService.getBookByPrice(price);
    observable.subscribe((response) => {
      console.log(response);
      this.books = response as Books[];
    });
  }

  getBookByPriceCategory(price,category)
  {
    
    console.log(category); 
    const observable=this.readerService.getBookByPriceCategory(price,category);
    observable.subscribe((response) => {
      console.log(response);
      this.books = response as Books[];
    });
  }

  addToCart(books) {
    this.cartService.addToCart(books);
    window.alert('Your product has been added to the cart!');
  }

  constructor(private readerService:ReaderService, private cartService:CartService) { }

  ngOnInit(): void {
  }

}
