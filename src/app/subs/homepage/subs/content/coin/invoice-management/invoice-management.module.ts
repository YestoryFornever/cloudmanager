import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap';
import {CalendarModule,PickListModule} from 'primeng/primeng';
import { InvoiceDetailsComponent } from'./subs/invoice-details/invoice-details.component';
import { OrderByAscPipe2 } from '../../../../../../pipes/orderByAsc2.pipes';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		FormsModule,
		CalendarModule,PickListModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule
	],
	declarations: [
		InvoiceDetailsComponent,
		OrderByAscPipe2
	]
})
export class InvoiceManagementModule { }
