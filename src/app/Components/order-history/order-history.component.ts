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
  startDate:Date;
  endDate:Date;

  authorId=parseInt(sessionStorage.getItem('AuthorId'));

  history(startDate,endDate)
  {

    console.log(this.authorId);
    console.log(this.startDate);
    console.log(this.endDate);


    if(this.startDate==null)
    {
      alert ("Enter START DATE")
      
    }
    if(this.endDate==null)
    {
      alert ("Enter End DATE")
      
    }

  

    if(this.endDate==null && this.startDate==null)
    {
      alert ("Enter Date")
    }
    
    
    
    console.log(this.authorId); 
    const observable=this.financialsService.getTransaction(this.startDate,this.endDate,this.authorId);
    observable.subscribe((response) => {
      console.log(response);
      this.transact = response as Transaction[];
    });
  
  }

  constructor(private financialsService:FinancialsService) { }

  ngOnInit(): void {

   

  }

}
