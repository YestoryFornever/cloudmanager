import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AuthRoleManageComponent } from './auth-role-manage.component';
import { AuthRoleManageAuthorizationComponent } from './subs/auth-role-manage-authorization/auth-role-manage-authorization.component';

import { AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';
import { CalendarModule,PickListModule ,TreeModule,TreeNode} from 'primeng/primeng';
@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		AlertModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,
		CalendarModule,PickListModule,TreeModule

	],
	declarations: [
		AuthRoleManageComponent,
		AuthRoleManageAuthorizationComponent
	]
})
export class AuthRoleManageModule { }