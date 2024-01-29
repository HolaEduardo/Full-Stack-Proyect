import {
  Component,
  OnInit,
  HostListener,
  Inject,
  ViewChild
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  document: any;
  @ViewChild('registerModal') public registerModal: ModalDirective;

  constructor(
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.scrollY > 100) {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.remove("navbar-transparent");
        element.classList.add("bg-");
      }
    } else {
      var element = document.getElementById("navbar-top");
      if (element) {
        element.classList.add("navbar-transparent");
        element.classList.remove("bg-");
      }
    }
  }
  ngOnInit() {
    this.onWindowScroll(event);
  }
}
