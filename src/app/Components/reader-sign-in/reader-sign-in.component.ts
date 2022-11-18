import { Component, OnInit } from '@angular/core';
import { ReaderAccountService } from 'src/app/reader-account.service';
import Reader from '../Entity/Reader';

@Component({
  selector: 'app-reader-sign-in',
  templateUrl: './reader-sign-in.component.html',
  styleUrls: ['./reader-sign-in.component.css']
})
export class ReaderSignInComponent implements OnInit {



  reader: Reader =new Reader();
  readerLoggedIn: Reader =new Reader();
  readerId :any;

userName:string;
password:string;
rid:number;

signin(userName,password)
 {

  if(this.userName!=null&&this.password!=null){
    
    const observable = this.readerAccountService.sigin(this.userName,this.password);
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
      

      this.readerLoggedIn = response[0] as Reader;

      this.readerId = this.readerLoggedIn.rId;

      sessionStorage.setItem('ReaderId',this.readerId);
            
       console.log(this.readerId);

       
       
       

      
      window.location.href = "/readerdashboard";  
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

 
 

 




  constructor(private readerAccountService:ReaderAccountService) { }

  ngOnInit(): void {
  }

}
