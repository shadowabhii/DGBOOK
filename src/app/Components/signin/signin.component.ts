import { Component, OnInit } from '@angular/core';
import Author from '../Entity/Author';
import { AuthorAccountService } from 'src/app/services/author-account.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 author: Author =new Author();
 authorLoggedIn: Author =new Author();
 authorId :any;

userName:string;
password:string;
id:number;

signin(userName,password)
 {

  if(this.userName!=null&&this.password!=null){
    
    const observable = this.authorAccountService.sigin(this.userName,this.password);
    console.log(observable);
    
    observable.subscribe((response)=>
    {

      if(response[0]==null)
      {
        alert("something went wrong")
      }
      else
      {
      console.log(response+"hello");
     // alert("Author LoggedIn");  
      

      this.authorLoggedIn = response[0] as Author;

      this.authorId = this.authorLoggedIn.aId

      sessionStorage.setItem('AuthorId',this.authorId);
            
       console.log(this.authorId);

       
       
       

      
      window.location.href = "/dashboard";  
      }  
    },
    function (error) {
      console.log(error);
      alert("Something went wrong");
    }
    );

  }
  else{
    alert("Please Enter Your Valid credentials");
  }
    
  
    
 }

 


 


  constructor(private authorAccountService:AuthorAccountService) { }

  ngOnInit(): void {
    const promise = this.authorAccountService.getUser();
    promise.subscribe((response) => {
      console.log(response);
      this.author = response as Author;
    })

  }

}
