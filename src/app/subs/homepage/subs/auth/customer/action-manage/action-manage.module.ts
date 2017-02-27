import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {ActionManageDetialComponent} from './subs/action-manage-detial/action-manage-detial.component';
import {ActionManageListComponent} from './subs/action-manage-list/action-manage-list.component'
import {ActionManageComponent} from './action-manage.component'
import {CalendarModule} from 'primeng/primeng';

import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule  } from 'ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
		,CalendarModule
	],
	declarations: [
		ActionManageListComponent,
		ActionManageComponent,
		ActionManageDetialComponent
	]
})
export class ActionManageModule { }