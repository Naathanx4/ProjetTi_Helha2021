import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './container/nav/nav.component';
import { MainComponent } from './container/main/main.component';
import { SearchComponent } from './container/search/search.component';
import { UserComponent } from './user/user.component';
import { ConnexionComponent } from './user/connexion/connexion.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { AccueilWithoutConnexionComponent } from './user/accueil-without-connexion/accueil-without-connexion.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    MainComponent,
    SearchComponent,
    UserComponent,
    ConnexionComponent,
    InscriptionComponent,
    AccueilWithoutConnexionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
