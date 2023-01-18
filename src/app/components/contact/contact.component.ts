import { Component, OnInit } from '@angular/core';
import { faYoutube,faTwitter,faGithub,faLinkedin,faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope,faLocationDot} from '@fortawesome/free-solid-svg-icons';





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

  
  ngOnInit(): void {
  }

}
