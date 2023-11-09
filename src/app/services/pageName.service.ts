import { Injectable, OnInit, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNameService implements OnInit {
  pageName: string = "Saurabh Sharma";

  getPathName(): string {
    return this.pageName
  }

  updatePathName(newPathName: string): void {
    if (newPathName.length === 1) {
      this.pageName = "Saurabh Sharma"
      return;
    }
    else {
      this.pageName = newPathName.substring(1);
    }
    // console.log("updated", this.pageName)
  }
  constructor() { }
  ngOnInit(): void {

  }
}
