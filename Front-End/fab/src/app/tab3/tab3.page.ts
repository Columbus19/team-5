import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  NAME: string;
  ADDRESS: string;
  MOBILE: string;
  EMAIL: string;

  constructor(private http: HttpClient) {
    try {
      this.http.get('http://localhost:3000/api/v1/124').subscribe((response) => {
        this.NAME = response['ClientName'];
        this.ADDRESS = response['Address'];
        this.MOBILE = response['PhoneNumber'];
        this.EMAIL = response['Email'];
      });
    }
    catch(e)
    {
      this.NAME = "Server not set up properly."
    }
  }

  ngOnInit(){

  }

}
