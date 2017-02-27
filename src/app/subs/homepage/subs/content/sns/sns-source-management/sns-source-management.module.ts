import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import {SnsSourceListComponent} from './subs/sns-source-list/sns-source-list.componment'
import {SnsSourceDetialComponent} from'./subs/sns-source-detial/sns-source-detial.componment'
import {SnsSourceManagementComponent} from'./sns-source-management.componment'

import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule } from 'ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		FormsModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		SnsSourceListComponent,
		SnsSourceDetialComponent,
		SnsSourceManagementComponent,
	]
})
export class SnsSourceManagementModule { }