import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {SnsShareManagementComponent} from './sns-share-management.componment'
import {SnsShareDetailsComponent} from'./subs/sns-share-detilas/sns-share-details.component'
import {SnsShareListComponent} from'./subs/sns-share-list/sns-share-list.component'
import {SnsShareAddComponent} from'./subs/sns-share-add/sns-share-add.component'

import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule } from 'ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		SnsShareManagementComponent,
		SnsShareDetailsComponent,
		SnsShareListComponent,
		SnsShareAddComponent
	]
})
export class SnsShareManagementModule { }