import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHightlightDirective } from './better-highlights/better-hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    BetterHightlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
