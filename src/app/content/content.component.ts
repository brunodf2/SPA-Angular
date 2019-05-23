import { Component, OnInit } from "@angular/core";
import * as Typed from "typed.js";

@Component({
  selector: "app-content", 
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const options = {
      stringsElement: "#typed-strings",
      strings: [
        "Bem vindo à PAN",
        "Esse e o nosso SITE",
        "Inovador, digital e seguro"
      ],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 900,
      loop: true
    };

    const typed = new Typed(".typing-element", options);
  }
}
