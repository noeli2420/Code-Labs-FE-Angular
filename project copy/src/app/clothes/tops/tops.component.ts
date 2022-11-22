import { Component, OnInit } from "@angular/core";
import { Clothe } from "../clothes.model";
@Component({
  selector: "app-tops",
  templateUrl: "./tops.component.html",
  styleUrls: ["./tops.component.css"],
})
export class TopsComponent implements OnInit {
  clothe: Clothe = new Clothe("", "", "", "", "");
  constructor() {}

  ngOnInit(): void {}
}
