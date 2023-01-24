import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { BlogcardService } from './blogcard.service';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  constructor(private blogCardDataService : BlogcardService){

  }
  
  cardData : any  = this.blogCardDataService.blogCardData;

  // tempArr : any = [
  //   {
  //     id:1,
  //     text:"One"
  //   },
  //   {
  //     id:2,
  //     text:"Two"
  //   },
  //   {
  //     id:3,
  //     text:"Two"
  //   },
  //   {
  //     id:4,
  //     text:"Four"
  //   },
  //   {
  //     id:5,
  //     text:"Five"
  //   },
  //   {
  //     id:6,
  //     text:"Six"
  //   },
  //   {
  //     id:7,
  //     text:"Seven"
  //   },
  //   {
  //     id:8,
  //     text:"Eight"
  //   }
  // ];
  ngOnInit(): void {
    gsap.from('.card-main', { duration: 2, ease: "expo.out", y: -100 });
    gsap.from('.card-title', { duration: 2, ease: "expo.out", y: 100 });
    console.log("****",this.cardData);
    
  }

}
