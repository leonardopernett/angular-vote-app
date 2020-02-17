import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { AddLinkComponent } from './components/add-link/add-link.component';
import { ListLinkComponent } from './components/list-link/list-link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    AddLinkComponent,
    ListLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
