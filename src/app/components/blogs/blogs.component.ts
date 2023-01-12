import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  tempArr : any = [
    {
      id:1,
      text:"One"
    },
    {
      id:2,
      text:"Two"
    },
    {
      id:3,
      text:"Two"
    },
    {
      id:4,
      text:"Four"
    },
    {
      id:5,
      text:"Five"
    },
    {
      id:6,
      text:"Six"
    },
    {
      id:7,
      text:"Seven"
    }
  ];
  ngOnInit(): void {
  }

}
