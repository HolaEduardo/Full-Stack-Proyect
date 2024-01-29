import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-registerpage',
  templateUrl: 'registerpage.component.html',
})
export class RegisterpageComponent implements OnInit {
  isCollapsed = true;

  constructor(
    

  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("register-page");
  }



  @HostListener('mousemove', ['$event'])  
  onMouseMove(event: MouseEvent) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");

    var posX = event.clientX - window.innerWidth / 2;
    var posY = event.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "translate3d(" + posX * 0.05 + "px," + posY * 0.05 + "px,0px)";
    squares2.style.transform =
      "translate3d(" + posX * 0.1 + "px," + posY * 0.1 + "px,0px)";
    squares3.style.transform =
      "translate3d(" + posX * 0.15 + "px," + posY * 0.15 + "px,0px)";
    squares4.style.transform =
      "translate3d(" + posX * 0.2 + "px," + posY * 0.2 + "px,0px)";
    squares5.style.transform =  
      "translate3d(" + posX * 0.25 + "px," + posY * 0.25 + "px,0px)";

    this.onMouseMove(event);
    }





  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("register-page");


  }
}
