import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import {CalendarModule,PickListModule} from 'primeng/primeng';
import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';

import { AuditDetailsComponent } from'./subs/audit-details/audit-details.component';
import { OrderByAscPipe } from '../../../../../../pipes/orderByAsc.pipes';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		CalendarModule,PickListModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule
	],
	declarations: [
		AuditDetailsComponent,
		OrderByAscPipe
	]
})
export class CoinCommodityExchangeAuditModule { }
