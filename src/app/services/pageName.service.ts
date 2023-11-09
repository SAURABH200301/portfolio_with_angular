import { Injectable, OnInit, SimpleChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageNameService implements OnInit {
  currentUrl: string | undefined;
  pageName: string = "Saurabh Sharma";

  getPathName(): string {
    return this.pageName
  }

  updatePathName(newPathName: string): void {

    if(newPathName==="/")
      this.pageName="Saurabh Sharma"
    else
      this.pageName = newPathName;
    // console.log("updated", this.pageName)
  }
  constructor() { }
  ngOnInit(): void {

  }
}
