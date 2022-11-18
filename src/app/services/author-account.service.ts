import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import Reader from '../Components/Entity/Reader';
import Author from '../Components/Entity/Author';

const BASE_URL_TO_ADD_AUTHOR = "http://localhost:8084/signup";
const BASE_URL_FOR_AUTHOR_LOGIN="http://localhost:8084/sigin/";
const BASE_URL_TO_GET_ALL_AUTHOR="http://localhost:8084/author";

@Injectable({
  providedIn: 'root'
})
export class AuthorAccountService {

  createUser(author:{firstName:string;lastName:string;
    age:number; userName:string; password:string; emailId:string;})
  {
    return this.http.post(BASE_URL_TO_ADD_AUTHOR,author);
  } 

  sigin(userName,password)
  {
return this.http.get(BASE_URL_FOR_AUTHOR_LOGIN+userName+"/"+password);
  }

  getUser()
  {
    return this.http.get(BASE_URL_TO_GET_ALL_AUTHOR);
  }


  author: Author[]=[];

  loggeingIn(author: Author) {
    this.author.push(author);
  }

  loggedIn() {
    return this.author;
  }

  // logout() {
  //   this.author = [];
  //   return this.author;
  // }



  constructor(private http: HttpClient) { }
}
