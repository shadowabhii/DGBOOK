import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksComponent } from './Components/books/books.component';

import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorAccountComponent } from './Components/author-account/author-account.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SearchbookComponent } from './Components/searchbook/searchbook.component';
import { UpdatebookComponent } from './Components/updatebook/updatebook.component';
import { ReaderComponent } from './Components/reader/reader.component';
import { ReaderdashboardComponent } from './Components/readerdashboard/readerdashboard.component';
import { BuybookComponent } from './Components/buybook/buybook.component';
import { CartComponent } from './Components/cart/cart.component';
import { ReaderHistoryComponent } from './Components/reader-history/reader-history.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ShowbooksComponent } from './Components/showbooks/showbooks.component';
import { RevenueComponent } from './Components/revenue/revenue.component';
import { ReaderSignInComponent } from './Components/reader-sign-in/reader-sign-in.component';
import { ReaderAccountComponent } from './Components/reader-account/reader-account.component';








@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,  
    NavBarComponent, AuthorAccountComponent, HomepageComponent, 
    DashboardComponent, SigninComponent, SearchbookComponent, UpdatebookComponent, 
    ReaderComponent, ReaderdashboardComponent, BuybookComponent, CartComponent, 
    ReaderHistoryComponent, CheckoutComponent, ShowbooksComponent, RevenueComponent, ReaderSignInComponent, ReaderAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
