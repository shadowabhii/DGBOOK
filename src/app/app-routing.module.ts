import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './Components/books/books.component';
import { AuthorAccountComponent } from './Components/author-account/author-account.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SearchbookComponent } from './Components/searchbook/searchbook.component';
import { UpdatebookComponent } from './Components/updatebook/updatebook.component';
import { ReaderdashboardComponent } from './Components/readerdashboard/readerdashboard.component';
import { BuybookComponent } from './Components/buybook/buybook.component';
import { CartComponent } from './Components/cart/cart.component';
import { ReaderComponent } from './Components/reader/reader.component';
import { ReaderHistoryComponent } from './Components/reader-history/reader-history.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { ShowbooksComponent } from './Components/showbooks/showbooks.component';
import { RevenueComponent } from './Components/revenue/revenue.component';
import { ReaderAccountComponent } from './Components/reader-account/reader-account.component';
import { ReaderSignInComponent } from './Components/reader-sign-in/reader-sign-in.component';

const routes: Routes = [

  { path: 'book', component: BooksComponent },
  { path: 'author', component: AuthorAccountComponent },
  { path: 'home', component: HomepageComponent } ,
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sigin', component: SigninComponent },
  { path: 'searchbook', component: SearchbookComponent },
  { path: 'updatebook', component: UpdatebookComponent },
  { path: 'readerdashboard', component: ReaderdashboardComponent },
  { path: 'buybook', component: BuybookComponent},
  { path: 'cart', component: CartComponent},
  { path: 'read', component: ReaderComponent},
  { path: 'history', component: ReaderHistoryComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'showbook', component: ShowbooksComponent},
  {path :'revenue' , component: RevenueComponent},
  { path: 'readerAccount', component: ReaderAccountComponent},
  {path :'readerSignIn' , component: ReaderSignInComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
