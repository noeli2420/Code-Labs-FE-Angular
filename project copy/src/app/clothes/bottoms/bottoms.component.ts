import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Clothe } from "../clothes.model";

@Component({
  selector: "app-bottoms",
  templateUrl: "./bottoms.component.html",
  styleUrls: ["./bottoms.component.css"],
})



export class BottomsComponent implements OnInit {
  @Output() clotheWasSelected = new EventEmitter<Clothe>();
  clothes: Clothe[] = [
    new Clothe(
      "Blueberry Swirl",
      "Sweater",
      "Cotton",
      "Winter Clothe",
      "https://clipartix.com/wp-content/uploads/2016/11/Clothing-change-clothes-clipart-free-images.png"
    ),
    new Clothe (
      "Trendy Trench",
      "Trench Coat",
      "Cotton",
      "Winter Clothe",
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36185/coat-clothing-clipart-md.png"
    )

  ];




  constructor() {}

  ngOnInit() {}

  onClotheSelected(clothes: Clothe) {
    this.clotheWasSelected.emit(clothes);
  }
}
