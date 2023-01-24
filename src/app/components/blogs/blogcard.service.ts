import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogcardService {

  constructor() { }

  blogCardData : any = [
    {
      id : "001",
      imagePath : "../../../assets/angular.svg",
      title : "Sticky Header",
      subTitle : "Angular",
      content : "Sticky headers (or persistent headers) are a common pattern for keeping the header of a website or app in the same place on the screen while the user scrolls down the page."
    }
  ]


}
