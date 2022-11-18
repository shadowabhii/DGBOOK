import { Component, OnInit } from '@angular/core';
import { ReaderAccountService } from 'src/app/reader-account.service';
import Reader from '../Entity/Reader';

@Component({
  selector: 'app-reader-account',
  templateUrl: './reader-account.component.html',
  styleUrls: ['./reader-account.component.css']
})
export class ReaderAccountComponent implements OnInit {
  reader:Reader=new Reader();

  saveReader()
  {

    console.log(this.reader)
    const observable = this.readerAccountService.createReader(this.reader);
    observable.subscribe((response)=>
    {
      console.log(response);
      alert("Reader Created");      

      
      window.location.href = "/readerSignIn";      
    },
    function (error) {
      console.log(error);
      alert("Something went wrong");
    }
    );
  }

  constructor(private readerAccountService:ReaderAccountService) { }

  ngOnInit(): void {
  }

}
