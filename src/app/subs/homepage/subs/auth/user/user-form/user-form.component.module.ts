import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'

import { RouterModule } from '@angular/router';
import {PickListModule} from 'primeng/primeng';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component'
import { UserFormListComponent } from './user-form-list/user-form-list.component'
import { UserFormAddUserComponent } from './user-form-addUser/user-form-addUser.component' 
import { UserFormAddFormComponent } from './user-form-addForm/user-form-addForm.component' 
import { UserFormVipComponent } from './user-form-vip/user-form-vip.component'
import { UserFormVipEditComponent } from './user-form-vipEdit/user-form-vipEdit.component'
import {AutoCompleteModule} from 'primeng/primeng';
import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule ,TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
	imports: [
		// SnsNewsManagementRouting,
		PickListModule,
		BrowserModule,
		HttpModule,
		RouterModule,
		AutoCompleteModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule
	],
	declarations: [
		UserFormEditComponent,
		UserFormListComponent,
		UserFormAddUserComponent,
		UserFormAddFormComponent,
		UserFormVipComponent,
		UserFormVipEditComponent
	]
})
export class UserFormComponentModule { }