import { Component, OnInit } from '@angular/core';
import { faYoutube,faTwitter,faGithub,faLinkedin,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';






@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  faYoutube: any = faYoutube;
  faTwitter : any = faTwitter;
  faGithub : any = faGithub;
  faLinkedin : any = faLinkedin;
  faPhone : any = faPhone;
  faEnvelope : any = faEnvelope;
  faLocationDot : any = faLocationDot;
  tl : any = gsap.timeline();


  
  ngOnInit(): void {

    gsap.from('.linkedIn', { duration: 2, ease: "expo.out", y: 200 });
    gsap.from('.twitter', { duration: 2, ease: "expo.out", y: -100 });
    gsap.from('.github', { duration: 2, ease: "expo.out", y: 200 });

    gsap.from('.phone', { duration: 2, ease: "expo.out", x: -200 });
    gsap.from('.mail', { duration: 2, ease: "expo.out", x: 100 });
    gsap.from('.address', { duration: 2, ease: "expo.out", x: -200 });

   

  }

}
