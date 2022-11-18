import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Transaction from './Components/Entity/Transaction';

const BASE_URL_TO_RECORD_TRANSACTION="http://localhost:8086/transactionss";
const BASE_URL_TO_AUTHOR_REVENUE="http://localhost:8086/rev/";
@Injectable({
  providedIn: 'root'
})
export class FinancialsService {

  recordTransaction(transaction:Transaction)
  {

    console.log(transaction);
    
      return this.http.post(BASE_URL_TO_RECORD_TRANSACTION,transaction);
  }

  getAuthorRevenue(startDate,endDate,bookId)
  {

      return this.http.get(BASE_URL_TO_AUTHOR_REVENUE+startDate+"/"+endDate+"/"+bookId);
  }

  constructor(private http:HttpClient) { }
}
