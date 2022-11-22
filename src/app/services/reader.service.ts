import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const BASE_URL_TO_SEARCH_BOOK_CATEGORY="http://localhost:8085/reader/category/";
const BASE_URL_TO_SEARCH_BOOK_PRICE="http://localhost:8085/reader/price/";
const BASE_URL_TO_SEARCH_BOOK_PRICE_CATEGORY="http://localhost:8085/reader/pricecategory/";
const BASE_URL_TO_BUY_BOOK="http://localhost:8085/buybook";
const BASE_URL_FOR_READER_TO_READ_PURCHASED_BOOK="http://localhost:8085/reader/purchasedbook/";
const BASE_URL_TO_SEARCH_BOOK_AUTHOR="http://localhost:8085/reader/author/";
const BASE_URL_TO_SEARCH_BOOK_BY_ID="http://localhost:8085/reader/id/";

@Injectable({
  providedIn: 'root'
})


export class ReaderService {

  getBookById(bId)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_BY_ID+bId);
  }

  orderBook(buyBook:{paymentid:string;readerName:string;readerEmailId:string;bId:number;rId:number})
  {     
return this.http.post(BASE_URL_TO_BUY_BOOK,buyBook);
  }

  getBookByCategory(category)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_CATEGORY+category);
  }

  getBookByAuthor(author)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_AUTHOR+author);
  }

  getBookByPrice(price)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_PRICE+price);
  }

  getBookByPriceCategory(price,category)
  {
    return this.http.get(BASE_URL_TO_SEARCH_BOOK_PRICE_CATEGORY+price+"/"+category);
  }

 getReaderPurchasedBook(rId)
 {
  return this.http.get(BASE_URL_FOR_READER_TO_READ_PURCHASED_BOOK+rId);
 }
  constructor(private http:HttpClient) { }
}
