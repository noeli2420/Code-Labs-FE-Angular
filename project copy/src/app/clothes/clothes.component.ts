import { Component, OnInit } from '@angular/core';

import { Clothe } from './clothes.model';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  selectedRecipe: Clothe;

  constructor() { }

  ngOnInit() {
  }

}
