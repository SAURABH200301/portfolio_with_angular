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
  constructor(private router: Router, private pageName: PageNameService) {
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === "/")
          this.pathName = "Saurabh Sharma"
        else
          this.pathName = event.urlAfterRedirects.substring(1);
        this.pageName.updatePathName(event.urlAfterRedirects);
      }
    });
  }
}

