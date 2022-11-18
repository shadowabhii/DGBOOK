import { Component, OnInit } from '@angular/core';
import { AuthorAccountService } from 'src/app/services/author-account.service';
import Author from '../Entity/Author';

@Component({
  selector: 'app-author-account',
  templateUrl: './author-account.component.html',
  styleUrls: ['./author-account.component.css']
})
export class AuthorAccountComponent implements OnInit {

  author:Author=new Author();
  authors:Author[]=[];

  saveAuthor()
  {

    console.log(this.author)
    const observable = this.authorAccountService.createUser(this.author);
    observable.subscribe((response)=>
    {
      console.log(response);
      alert("Author Created"); 

      

      
      window.location.href = "/sigin";      
    },
    function (error) {
      console.log(error);
      alert("Something went wrong");
    }
    );
  }



  constructor(private authorAccountService:AuthorAccountService) { }

  ngOnInit(): void {


  }

}
