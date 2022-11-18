import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import Books from '../Entity/Books';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  book: Books = new Books();
  books: Books[] = [];
  id:number;
  authorId:number;

  updateBook(bk,j)
  {

    this.id=j;
    this.book.title=bk.title
    this.book.publisher=bk.publisher;
    this.book.publishedDate=bk.publishedDate;
    this.book.price=bk.price;
    this.book.logo=bk.logo;
    this.book.chapterOrContent=bk.chapterOrContent;
    this.book.category=bk.category;
    this.book.author=bk.author;
    this.book.active=bk.active;

  }

  showBook()
  {
    this.authorId=parseInt(sessionStorage.getItem('AuthorId'));
    
    
      
      const observable=this.bookService.getBookByAuthor(parseInt(sessionStorage.getItem('AuthorId')));
      observable.subscribe((response) => {
        console.log(response);
        this.books = response as Books[];
      });
    }

  update(book)
  {
    
     console.log(book); 
const observable=this.bookService.updateBook(this.book,this.id);
observable.subscribe(
  (response:any) => {
  console.log(response)
  alert("Book Updated");
  },
  function(error){
    console.log(error);
    alert("Something went wrong");        
  });



  window.location.reload()
    
  }

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {

   
  }

}
