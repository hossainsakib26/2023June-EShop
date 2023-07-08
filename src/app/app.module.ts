import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniverselCardComponent } from './utilities/card/universel-card/universel-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './utilities/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    UniverselCardComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
