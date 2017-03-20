import { Component, OnInit, AfterViewChecked, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';

import { ExcelExportService } from '../../../../services/excel-export.service';
import { EventFollowService } from './services/event-follow.service';
import { EventClass } from './classes/events';
@Component({
	selector: 'alphain-event-follow',
	templateUrl: 'event-follow.component.html',
	styleUrls: [
		'./event-follow.component.css',
		'../../../../css/header.css',
		'../../../../css/table.css',
		'../../../../css/condition.css',
		'../../../../css/pagination.css'
	],
	providers:[
		EventFollowService,
		ExcelExportService
	]
})
export class EventFollowComponent implements OnInit {
	constructor(
		private changeDetectorRef:ChangeDetectorRef,
		private eventFollowService:EventFollowService,
		private sanitizer: DomSanitizer,
		private activatedRoute:ActivatedRoute,
		private router:Router,
	){}

	ngOnInit() {
		//
	}
	ngAfterViewChecked(){
		//
	}
	
	// 分页
	msgNumbers = [10,20,30,50];
	public firstText:string = '首页';
	public lastText:string = '末页';
	public previousText:string = '<';
	public nextText:string = '>';
	public sizeData(num:number){
	};
	// 翻页
	public pageChanged(event:any):void {
	};
	public pageNumChange(event:any){
	}
	public setPage(pageNo:number):void {
	};
}