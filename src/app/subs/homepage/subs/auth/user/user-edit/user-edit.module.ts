import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { UserEditComponent } from './user-edit.component';
import { FileUploadComponent } from './subs/file-upload/file-upload.component';

import { ButtonsModule,TypeaheadModule } from 'ng2-bootstrap';
import { CalendarModule } from 'primeng/primeng';

import { SafeUrlPipe } from '../../../../../../pipes/safeurl.pipes';
import { ApproveStatusPipe } from './pipes/approve-status.pipe';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { VisitStatusPipe } from './pipes/visit-status.pipe';

@NgModule({
	imports: [
		BrowserModule,
		ButtonsModule,TypeaheadModule,
		CalendarModule
	],
	declarations: [
		UserEditComponent,
		FileUploadComponent,

		SafeUrlPipe,
		ApproveStatusPipe,
		UserStatusPipe,
		VisitStatusPipe
	]
})
export class UserEditModule { }