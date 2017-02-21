import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';

import { AuthUserGroupService } from './services/auth-user-group.service';
import { Group } from './classes/groups';
@Component({
	selector: 'alphain-auth-user-group',
	templateUrl: 'auth-user-group.component.html',
	styleUrls: [
		'./auth-user-group.component.css',
		'../../../../css/header.css',
		'../../../../css/table.css',
		'../../../../css/pagination.css'
	],
	providers:[AuthUserGroupService]
})
export class AuthUserGroupComponent implements OnInit {
	constructor(private authUserGroupService:AuthUserGroupService,private changeDetectorRef:ChangeDetectorRef) {
	}
	ngOnInit(){
		this.getGroups();
	}

	groupName:string;
	errorMsg:string;
	groups:Group[];
	groupsLength:number;
	getGroups(){
		this.authUserGroupService.getGroups(
			this.groupName
		).subscribe(
			groups => this.groups = groups,
			error => this.errorMsg = <any>error
		);
	}
	// 分页
	height = '312px';
	msgNumbers = [{Number:'5'},{Number:'7'},{Number:'10'},{Number:'15'},{Number:'55'}];
	public firstText:string = '首页';
	public lastText:string = '末页';
	public previousText:string = '<';
	public nextText:string = '>';
	public maxSize:number = 5;
	public totalItems:number=100;
	public itemsPerPage:number = 5;
	public currentPage:number=1;
	public totalPages:number;
	public sizeData(Number:any){
		this.height = Number*40+120+'px';
		this.currentPage = 1;//无法同时修改当前页和每页总数
		this.changeDetectorRef.detectChanges();
		this.itemsPerPage = Number;
	};
	// 翻页
	public pageChanged(event:any,allcheck:any):void {
		//console.log(event);
	};
	public pageNumChange(event:any){
		//console.log(event);
		this.totalPages = event;
	}
	public setPage(pageNo:number):void {
		this.currentPage = pageNo;
	};
}