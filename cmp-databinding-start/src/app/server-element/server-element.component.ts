import { Component, OnInit, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,  } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked   {

 @Input('srvElement') element: {type:string, name:string, content:string};
 @Input() name: string;

  constructor() {
    console.log('constructor called ');
  }

  ngOnInit() {
    console.log('ngOnInit called ');
  }
  ngOnChanges( ) {

  }
  ngDoCheck() {

  }
  ngAfterContentChecked() {

  }
  ngAfterContentInit() {

  }
  ngAfterViewChecked() {

  }
  ngAfterViewInit() {

  }
}
