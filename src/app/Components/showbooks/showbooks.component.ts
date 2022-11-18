import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import Books from '../Entity/Books';

@Component({
  selector: 'app-showbooks',
  templateUrl: './showbooks.component.html',
  styleUrls: ['./showbooks.component.css']
})
export class ShowbooksComponent implements OnInit {

  books:Books[]=[];

  authorId :number;

  showBook()
  {
    this.authorId=parseInt(sessionStorage.getItem('AuthorId'));
    
    
      
      const observable=this.bookService.getBookByAuthor(parseInt(sessionStorage.getItem('AuthorId')));
      observable.subscribe((response) => {
        console.log(response);
        this.books = response as Books[];
      });
    }

  constructor(private bookService: BooksService ) { }

  ngOnInit(): void {

   
 
  }

}
