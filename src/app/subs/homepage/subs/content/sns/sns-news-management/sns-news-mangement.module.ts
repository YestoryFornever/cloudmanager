import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {SnsNewsManagementComponent} from './sns-news-management.component'
import {SnsNewsAddComponent} from'./subs/sns-news-add/sns-news-add.component'
import {SnsNewsListComponent} from'./subs/sns-news-list/sns-news-list.component'

import {SnsNewsChangeComponent} from'./subs/sns-news-change/sns-news-change.component'

import {SnsNewsDetailsComponent} from'./subs/sns-news-details/sns-news-details.component'

import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
	imports: [
		// SnsNewsManagementRouting,
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		SnsNewsManagementComponent,
		SnsNewsAddComponent,
		SnsNewsChangeComponent,
		SnsNewsDetailsComponent,
		SnsNewsListComponent	
	]
})
export class SnsNewsManagementModule { }