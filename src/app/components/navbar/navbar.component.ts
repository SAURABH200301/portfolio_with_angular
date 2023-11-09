import { Component, OnInit } from '@angular/core';
import { PageNameService } from 'src/app/services/pageName.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pathName: string | undefined;
  constructor(private router: Router,private pageName: PageNameService) {
    this.pathName = (pageName.pageName)
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pathName=event.urlAfterRedirects;
        this.pageName.updatePathName(event.urlAfterRedirects);
      }
    });
  }
}

