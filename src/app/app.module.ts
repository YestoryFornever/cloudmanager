import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { UserData } from '../../public/mock/database';
import { HomepageModule } from './subs/homepage/homepage.module';
import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './subs/login/login.component';
import { ErrorComponent } from './subs/error/error.component';
@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HomepageModule,
		HttpModule,
		routing,
		//InMemoryWebApiModule.forRoot(UserData)//正式上线时需要注释掉
	],
	declarations: [
		AppComponent,
		LoginComponent,
		ErrorComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
