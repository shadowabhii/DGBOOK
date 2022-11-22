import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/services/reader.service';
import Books from '../Entity/Books';

import { AuthorAccountService } from 'src/app/services/author-account.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  book:Books=new Books();
  books:Books[]=[];
  newbooks:Books[]=[];
  readerName;
  readerEmailId;
  author;
  rId:number=parseInt(sessionStorage.getItem('ReaderId'));

  readBook()
  {
    const observable =this.readerService.getReaderPurchasedBook(this.rId)
    .subscribe((response) => {
      //console.log(response);
      this.books = response as Books[];
      this.books=this.books.filter(e=>(e.active==true))
    });
    
  }


  constructor(private readerService:ReaderService, private authorAccountService:AuthorAccountService) { }

  ngOnInit(): void {
  }

}
