import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  tl : any = gsap.timeline();
  ngOnInit(): void {
    gsap.from('.skill-card', { duration: 2, ease: "expo.out", y: -100 });
    gsap.from('.skill-card img', { duration: 2, ease: "expo.out", x: -50 });
   
  }

}
