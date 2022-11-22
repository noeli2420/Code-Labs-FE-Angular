import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Clothe } from "../clothes.model";

@Component({
  selector: "app-bottoms",
  templateUrl: "./bottoms.component.html",
  styleUrls: ["./bottoms.component.css"],
})

// export class Clothe {
//   constructor(
//     public name: string,
//     public type: string,
//     public fabric: string,
//     public description: string,
//     public imagePath: string
//   ) {}
// }

export class BottomsComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Clothe>();
  recipes: Clothe[] = [
    new Clothe(
      "Blueberry Swirl",
      "Sweater",
      "Cotton",
      "Winter sweater",
      "https://clipartix.com/wp-content/uploads/2016/11/Clothing-change-clothes-clipart-free-images.png"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Clothe) {
    this.recipeWasSelected.emit(recipe);
  }
}
