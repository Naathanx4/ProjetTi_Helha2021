import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InscriptionComponent} from "./user/inscription/inscription.component";
import {AccueilWithoutConnexionComponent} from "./user/accueil-without-connexion/accueil-without-connexion.component";
import {NotFoundComponent} from "./not-found/not-found.component";

//Module qui va gérer les routes de l'applications

const routes:Routes= [
  {path:'',pathMatch:'full',redirectTo:'accueil'},
  {path:'accueil',component:AccueilWithoutConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  //Appelée une seule fois car c'est elle qui va initialiser les routes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
