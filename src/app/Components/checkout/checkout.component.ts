import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import BuyBook from '../Entity/BuyBook';
import Books from '../Entity/Books';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  bookPrice:number;
  buyBook:BuyBook=new BuyBook();
  books:Books[]=[];

  

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

}
