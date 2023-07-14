import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniverselCardComponent } from './utilities/card/universel-card/universel-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './utilities/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBoxComponent } from './utilities/search-box/search-box.component';
import { MyButtonComponent } from './utilities/reusable-components/my-button/my-button.component';


@NgModule({
  declarations: [
    AppComponent,
    UniverselCardComponent,
    HomeComponent,
    MenuComponent,
    SearchBoxComponent,
    MyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
