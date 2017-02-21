import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {UserBackComponent} from './user-back.component';
import {UserBackDetailComponent} from'./subs/user-back-detail/user-back-detail.component';
import {UserBackListComponent} from'./subs/user-back-list/user-back-list.component';
// import {SnsShareAddComponent} from'./subs/sns-share-add/sns-share-add.component'

import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule  } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		UserBackComponent,
		UserBackDetailComponent,
		UserBackListComponent
	]
})
export class UserBackModule { }