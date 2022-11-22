import { Component, OnInit } from '@angular/core';
import { AuthorAccountService } from 'src/app/services/author-account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  author = this.authorAccountService.loggedIn();

//   getAuthor()
//   {
//   for(var i=0;i<this.author.length;i++)
//   {
// this.author=this.author[i].firstName+" "+this.reader[i].lastName;
// console.log(this.author);

//   }
// }

logOut()
{
  if((sessionStorage.getItem('AuthorId'))!=null)
  {
    sessionStorage.removeItem('AuthorId');
    window.location.href = "/home";

  }
}

  constructor(private authorAccountService:AuthorAccountService) { }

  ngOnInit(): void {
console.log("Authgor data");

    console.log(this.author);
    
  }

}
