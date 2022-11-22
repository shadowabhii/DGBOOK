import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ReaderhistoryService } from 'src/app/services/readerhistory.service';
import BuyBook from '../Entity/BuyBook';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-reader-history',
  templateUrl: './reader-history.component.html',
  styleUrls: ['./reader-history.component.css']
})
export class ReaderHistoryComponent implements OnInit {

  buyBook:BuyBook=new BuyBook();
  buyBooks:BuyBook[]=[];
  invoice:BuyBook[]=[];
  rId:number=parseInt(sessionStorage.getItem('ReaderId'));
  
  
  downloadInvoice(paymentid)
  {

    const observable =this.readerhistoryService.getReaderInvoice(paymentid);
    observable.subscribe((response) => {
      console.log(response);
      this.invoice = response as BuyBook[];
    });
  
  }

  getHistory()
  {
    const observable =this.readerhistoryService.getReaderHistory(this.rId);
    observable.subscribe((response) => {
      console.log(response);
      this.buyBooks = response as BuyBook[];
    });
  }

  @ViewChild('pdfTable') pdfTable: ElementRef;
  
  //PDF genrate button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
   
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();

  }

  constructor(private readerhistoryService:ReaderhistoryService) { }

  ngOnInit(): void {
  }

}
