import { Component, OnInit } from '@angular/core';
import Books from 'src/app/Components/Entity/Books';
import { AuthorAccountService } from 'src/app/services/author-account.service';

import { BooksService } from 'src/app/services/books.service';
import Reader from '../Entity/Reader';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  title = "Fill Details to Search Book";

  book: Books = new Books();
  books: Books[] = [];
  uploadedImage:File;
  author:string;
  aId:number;
  

  save() {

    this.book.aId=parseInt(sessionStorage.getItem('AuthorId'));

    const observable = this.bookService.createBook(this.book,this.uploadedImage);
    observable.subscribe(
      (response: any) => {
        console.log(response)
        alert("Book Added Sucessfully");
      },
      function (error) {
        console.log(error);
        alert("Something went wrong");
      }
    )

    window.location.reload()
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }

  getBookById(id)
  {
    console.log(id);
    const observable =this.bookService.getBookById(id).subscribe((response) => {
      console.log(response);
      this.book = response as Books;
    });
    window.location.reload()

  }

//   reader = this.authorAccountService.loggedIn();

//   getAuthor()
//   {
//   for(var i=0;i<this.reader.length;i++)
//   {
// this.author=this.reader[i].firstName+" "+this.reader[i].lastName;
// console.log(this.author);

//   }
// }
 
  constructor(private bookService: BooksService , private authorAccountService:AuthorAccountService) { }

  ngOnInit(): void {

    const promise = this.bookService.getBook();
   // this.getAuthor();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Books[];
      this.books.filter(e=>(e.author==this.author))
    })

  }



}



