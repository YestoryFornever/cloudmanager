import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import {ContactManageComponent} from './contact-manage.component';
import {ContactManageListComponent} from './subs/contact-manage-list.component/contact-manage-list.component'
import {ContactManageChangeComponent} from './subs/contact-manage-change.component/contact-manage-change.component'


import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule
	],
	declarations: [
		ContactManageComponent,
		ContactManageListComponent,
		ContactManageChangeComponent
	]
})
export class ContactManageModule { }