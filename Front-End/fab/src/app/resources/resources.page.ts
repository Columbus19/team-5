import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  home_page() {
    this.router.navigateByUrl('/tabs');
  }

}
