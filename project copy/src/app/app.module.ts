import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TopsComponent } from './clothes/tops/tops.component';
import { BottomsComponent } from './clothes/bottoms/bottoms.component';
import { ClotheItemComponent } from './clothes/bottoms/clothe-item/clothe-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ClothesComponent,
    TopsComponent,
    BottomsComponent,
    ClotheItemComponent,

    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
