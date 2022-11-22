import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Clothe } from '../../clothes.model';

@Component({
  selector: 'app-clothe-item',
  templateUrl: './clothe-item.component.html',
  styleUrls: ['./clothe-item.component.css']
})
export class ClotheItemComponent implements OnInit {
  @Input() recipe: Clothe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeSelected.emit();
  }

}
