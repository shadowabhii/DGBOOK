import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL_OF_READER_HISTORY="http://localhost:8085/reader/history/";
const BASE_URL_OF_READER_INVOICE="http://localhost:8085/reader/invoice/";

@Injectable({
  providedIn: 'root'
})


export class ReaderhistoryService {

  getReaderHistory(readerEmailId)
  {
      return this.http.get(BASE_URL_OF_READER_HISTORY+readerEmailId);
  }

  getReaderInvoice(paymentid)
  {
    return this.http.get(BASE_URL_OF_READER_INVOICE+paymentid);
  }

  constructor(private http:HttpClient) { }
}
