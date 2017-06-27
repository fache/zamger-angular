import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { PregledPredmeta } from './pregledpredmeta/pregled-predmeta.component';
import { Pocetna } from './pocetna/pocetna.component';
@NgModule ({
	imports: [
		RouterModule.forRoot([
    	  { path:'login', component: LoginComponent },
    	  { path:'', component: Pocetna }, 
    	  { path:'pregled-predmeta', component: PregledPredmeta },
    	 // { path:'pregled-predmeta/:id', component: PregledPredmeta },
     	  { path:'**', component: PageNotFoundComponent}
    ])
	],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }