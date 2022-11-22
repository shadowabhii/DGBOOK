import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readerdashboard',
  templateUrl: './readerdashboard.component.html',
  styleUrls: ['./readerdashboard.component.css']
})
export class ReaderdashboardComponent implements OnInit {

  logOut()
{
  if((sessionStorage.getItem('ReaderId'))!=null)
  {
    sessionStorage.removeItem('ReaderId');
    window.location.href = "/home";

  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
