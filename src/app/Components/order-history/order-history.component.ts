import { Component, OnInit } from '@angular/core';
import { FinancialsService } from 'src/app/financials.service';

import Transaction from '../Entity/Transaction';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  transaction : Transaction = new Transaction();
  transact: Transaction []=[];

  authorId=parseInt(sessionStorage.getItem('AuthorId'));

  history()
  {
    
    console.log(this.authorId); 
    const observable=this.financialsService.getTransaction(this.authorId);
    observable.subscribe((response) => {
      console.log(response);
      this.transact = response as Transaction[];
    });
  
  }

  constructor(private financialsService:FinancialsService) { }

  ngOnInit(): void {

   

  }

}
