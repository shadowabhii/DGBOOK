import { Component, OnInit } from '@angular/core';
import { FinancialsService } from 'src/app/financials.service';
import { BooksService } from 'src/app/services/books.service';
import Author from '../Entity/Author';
import Books from '../Entity/Books';
import Reader from '../Entity/Reader';
import Transaction from '../Entity/Transaction';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

 // authorId:number;
  book:Books= new Books();
  transaction:Transaction=new Transaction();
  authorId=parseInt(sessionStorage.getItem('AuthorId'));
  bookId:number;
  totalRevenue:number;
  startDate:Date;
  endDate:Date;


  checkRevenue(startDate,endDate)
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
    
    {
 
    const observable =this.financialServices.getAuthorRevenue(this.startDate,this.endDate,this.authorId).
    subscribe((response) => {
      console.log(response);
      this.totalRevenue = response as number;
      
    
    });
   // window.location.reload()
  }
  }


  constructor(private financialServices:FinancialsService,
              private bookService:BooksService) { }

  ngOnInit(): void {
  }

}
