import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';
// import {SnsNewsManagementRouting} from './sns-news-management-routing.module'
import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap/ng2-bootstrap';

import { RouterModule } from '@angular/router';
import {CalendarModule,PickListModule} from 'primeng/primeng';
import {CoinIssueComponent} from'./subs/coin-issue/coin-issue.component';
import {CoinListComponent} from './subs/coin-list/coin-list.component';

import { NumAddCommaPipe2 } from '../../../../../../pipes/numAddComma2.pipes';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule,
		CalendarModule,PickListModule,
		AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule
	],
	declarations: [
		CoinIssueComponent,
		CoinListComponent,
		NumAddCommaPipe2
	]
})
export class CoinGoldDetailModule { }
