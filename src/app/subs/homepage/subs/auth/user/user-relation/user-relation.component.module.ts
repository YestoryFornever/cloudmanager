import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';

import { UserRelationListComponent } from './user-relation-list/user-relation-list.component'
import { UserRelationDetailComponent } from './user-relation-detial/user-relation-detial.component'
import { UserRelationPlateComponent } from './user-relation-plate/user-relation-plate.component'
import { UserRelationLogComponent } from './user-relation-log/user-relation-log.component'
import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CalendarModule,PickListModule, TreeModule,TreeNode} from 'primeng/primeng';

@NgModule({
	imports: [
		// SnsNewsManagementRouting,
		BrowserModule,
		HttpModule,
		RouterModule,
		CalendarModule,PickListModule, TreeModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		UserRelationListComponent,
		UserRelationDetailComponent,
		UserRelationLogComponent,
		UserRelationPlateComponent
	]
})
export class UserRelationComponentModule { }