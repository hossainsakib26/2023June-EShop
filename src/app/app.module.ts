import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniverselCardComponent } from './utilities/card/universel-card/universel-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './utilities/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyButtonComponent } from './utilities/reusable-components/my-button/my-button.component';
import { MyInputComponent } from './utilities/reusable-components/my-input/my-input.component';
import { MySearchComponent } from './utilities/reusable-components/my-search/my-search.component';


@NgModule({
  declarations: [
    AppComponent,
    UniverselCardComponent,
    HomeComponent,
    MenuComponent,
    MyButtonComponent,
    MyInputComponent,
    MySearchComponent,
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
