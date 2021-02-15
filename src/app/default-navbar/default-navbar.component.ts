import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-navbar.component.html',
  styleUrls: ['./default-navbar.component.css']
})
export class DefaultNavbarComponent{
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }
}
