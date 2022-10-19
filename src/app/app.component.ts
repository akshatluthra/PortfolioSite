import { Component } from '@angular/core';
import { faCode, faPenToSquare,faMagnifyingGlass, faExternalLink, faPaperPlane, faPhoneSquareAlt, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeApp';
  faCode = faCode;
  faPenToSquare = faPenToSquare;
  faMagnifyingGlass = faMagnifyingGlass
  faExternalLink = faExternalLink
  faMessage = faPaperPlane
  faPhone = faPhoneSquareAlt
  faFacebook = faFacebook
  faTwitter = faTwitterSquare
  faInstagram = faInstagram
  faLinkedin = faLinkedin
  faTimes = faTimes
  faBars = faBars
  showLink = true
  showLink2 = false
  showLink3 = false
  showDetails = true
  showDetails2 = false
  showDetails3 = false
  checkPos = false
  ChangeSkills(){
    this.showLink = true;
    this.showDetails = true;
    this.showLink2 = false;
    this.showLink3 = false;
    this.showDetails2 = false
    this.showDetails3 = false
    console.log("Skill is changed")
  }
  ChangeSkills2(){
    this.showLink = false;
    this.showLink2 = true;
    this.showLink3 = false;
    this.showDetails = false;
    this.showDetails2 = true;
    this.showDetails3 = false;
  }
  
  ChangeSkills3(){
    this.showLink = false;
    this.showLink2 = false;
    this.showLink3 = true;
    this.showDetails2 = false;
    this.showDetails = false;
    this.showDetails3 = true;
  }
  
  sidebar(){
    if(this.checkPos){
      this.checkPos = !this.checkPos;
    } 
    else{
      this.checkPos = !this.checkPos;
    }
  }

}
