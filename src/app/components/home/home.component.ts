import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    gsap.to('.left', { duration: 2, ease: "bounce.out", y: 100 });
    gsap.to('.right', { duration: 2, ease: "bounce.out", x: 100 });
  }

}
