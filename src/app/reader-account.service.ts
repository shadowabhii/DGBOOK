import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Reader from './Components/Entity/Reader';



const BASE_URL_TO_ADD_READER="http://localhost:8085/readersignup";
const BASE_URL_TO_SIGNIN_READER="http://localhost:8085/sigin/";
@Injectable({
  providedIn: 'root'
})

export class ReaderAccountService {

  createReader(reader :Reader)
  {
      return this.http.post(BASE_URL_TO_ADD_READER,reader);
  }
  sigin(userName,password)
  {
return this.http.get(BASE_URL_TO_SIGNIN_READER+userName+"/"+password);
  }
 


  constructor(private http:HttpClient) { }
}
