import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './subs/login/login.component';
import { homepageRouting } from './subs/homepage/homepage-routing.module';
import { ErrorComponent } from './subs/error/error.component';

import GLOBAL = require('../../public/in.config');
@NgModule({
	imports:[
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: 'homepage',//GLOBAL.INCONFIG.getRoute(),
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent
			},
			...homepageRouting,
			{
				path: '**',
				component: ErrorComponent
			}
		])
	],
	exports: [
		RouterModule
	]
})

export class routing {}