import { Component, Input, OnInit } from "@angular/core";
import { Clothe } from "../clothes.model";
@Component({
  selector: "app-tops",
  templateUrl: "./tops.component.html",
  styleUrls: ["./tops.component.css"],
})
export class TopsComponent implements OnInit {
  @Input() clothe: Clothe = new Clothe(
    "Blueberry Swirl",
    "Sweater",
    "Cotton",
    "Winter Clothe",
    "https://clipartix.com/wp-content/uploads/2016/11/Clothing-change-clothes-clipart-free-images.png");

    // Clothe = new Clothe(
    //   "Trendy Trench",
    //   "Trench Coat ",
    //   "Cotton",
    //   "Winter Clothe",
    //   "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36185/coat-clothing-clipart-md.png");




  constructor() {}

  ngOnInit(): void {}
}
