import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import BuyBook from '../Entity/BuyBook';
import { ReaderService } from 'src/app/services/reader.service';
import Books from '../Entity/Books';
import Transaction from '../Entity/Transaction';
import { FinancialsService } from 'src/app/financials.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  buyBook: BuyBook = new BuyBook();
  transaction: Transaction = new Transaction();
  bid: number;
  totalCartPrice:number;
  public count = 1;  
  public cartTotal = 0;
  public gst = 0;
  price:number;
  authorId:number;


  getBookIdAndPrice()
  {
    for (let i = 0; i < this.books.length; i++) {
      this.bid = this.books[i].bId;
      this.price = this.books[i].price;
      this.authorId=this.books[i].aId;
      
    }
  }
  

  saveReaderDetails(buyBook) {
    this.books = this.cartService.getItems();
   this.buyBook.paymentid="PYMNTID"+Math.random();

    for (let i = 0; i < this.books.length; i++) {
      buyBook.bId = this.books[i].bId;
      buyBook.price = this.books[i].price;
      this.getBookIdAndPrice();
      this.readerTransaction();
      this.orderBook(buyBook);
    }
    console.log(buyBook);

    // this.orderBook(buyBook);

  }


  subtractCount(id: number) {
    this.count = this.count - 1;
    this.books.forEach(item => {
      this.cartTotal -= (item.price)
      this.gst = this.cartTotal + this.cartTotal * (8 / 100);
    })
    if (this.count == 0) {
      this.cartService.clearCart()
    }
  }



  orderBook(buyBook) {
    console.log(buyBook);
    const observable = this.readerService.orderBook(buyBook);


    observable.subscribe((response) => {
      console.log(response);
     // window.location.href = "/read"
    },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      }
    );


  }


getTotalCartValue(){
    let total = 0;
    for (var i = 0; i < this.books.length; i++) {
        if (this.books[i].price) {
          total += this.books[i].price ;
            this.totalCartPrice = total;
        }
    }
    console.log(total);
    
    return total;
}

readerTransaction()
{

  this.transaction.authorNotified=true;
  this.transaction.bookId=this.bid;
  this.transaction.price=this.price;
  this.transaction.date= new Date();
  this.transaction.quantity=1;
  this.transaction.readerId=parseInt(sessionStorage.getItem('ReaderId'));
  this.transaction.readerName=this.buyBook.readerName;
  this.transaction.aId=this.authorId;

  console.log(this.transaction);
  
  const observable = this.financialServices.recordTransaction(this.transaction);


  observable.subscribe((response) => {
    console.log(response);
   
  },
    function (error) {
      console.log(error);
      alert("Something went wrong");
    }
  );

}







  books = this.cartService.getItems();

  constructor(private cartService: CartService, private readerService: ReaderService,
              private financialServices:FinancialsService) { }

  ngOnInit(): void {

    
  }



}
