import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {SnsNewsFlashManagementComponent} from './sns-news-flash-management.component'
import {SnsNewsFlashListComponent} from'./subs/sns-news-flash-list/sns-news-flash-list.component'

import {SnsNewsFlashChangeComponent} from'./subs/sns-news-flash-change/sns-news-flash-change.componment'


import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule
	],
	declarations: [
		SnsNewsFlashManagementComponent,
		SnsNewsFlashListComponent,
		SnsNewsFlashChangeComponent
	]
})
export class SnsNewsFlashManagementModule { }