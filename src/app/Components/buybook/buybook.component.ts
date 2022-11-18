import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/services/reader.service';
import BuyBook from '../Entity/BuyBook';
import Books from '../Entity/Books';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css']
})
export class BuybookComponent implements OnInit {

book:Books=new Books();
books:Books[]=[];
buyBooks:BuyBook=new BuyBook();
buyBook:BuyBook[]=[];

addToCart(books) {
  this.cartService.addToCart(books);
  window.alert('Your product has been added to the cart!');
}


  constructor(private readerService:ReaderService, private cartService:CartService) { }

  ngOnInit(): void {
  }

}
