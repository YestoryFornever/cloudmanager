import { Component, ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ActivatedRoute, Router }   from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';
import { UserFormService } from '../services/user-form.service'

@Component({
	selector: 'user-form-vipEdit',
	templateUrl: './user-form-vipEdit.component.html',
	styleUrls: ['./user-form-vipEdit.component.css'],
	providers: [UserFormService]
})
export class UserFormVipEditComponent implements OnInit{ 
	constructor(private changeDetectorRef:ChangeDetectorRef,
				private activatedRoute:ActivatedRoute,
				private userFormService:UserFormService,
        		private router:Router) {}
	ngOnInit(){
	};
	returnTo(){
		this.router.navigate(['../../user-form-vip'],{relativeTo:this.activatedRoute}); 
	}
	addTo(){
		this.router.navigate(['../../user-form-addForm',"111"],{relativeTo:this.activatedRoute}); 
	}
//list状态切换
	public changeState = function(listState:any,userList:any){
		if(listState.checked==true){
			userList.style.background = 'rgb(255, 255, 150)';
		}else{
			userList.style.background = 'rgb(255, 255, 255)';
		}
	
	}
//全选HTMLImageElement
	 checkbox:any = document.getElementsByName('user');
	 checkAll = function(allcheck:any){
	 	this.color = allcheck.checked?"#ffa":"#fff";
			for(var i=0;i<this.checkbox.length;i++){
				this.checkbox[i].checked = allcheck.checked
			}
		};

// 分页
	msgNumbers = [{Number:'10'},{Number:'20'},{Number:'30'},{Number:'50'}];
	public firstText:string = '首页';
	public lastText:string = '末页';
	public previousText:string = '<';
	public nextText:string = '>';
	public maxSize:number = 5;
	public totalItems:number;
	public itemsPerPage:number = 10;
	public currentPage:number=1;
	public totalPages:number;
	public turnFirst(){
		this.currentPage = 1;//无法同时修改当前页和每页总数
		this.changeDetectorRef.detectChanges();
		// this.serch()
	}
	public sizeData(Number:any){
		// this.height = Number*40+40+'px';
		// this.currentPage = 1;//无法同时修改当前页和每页总数
		// this.changeDetectorRef.detectChanges();
		this.itemsPerPage = Number;
		this.turnFirst();
		var listBody:any = document.getElementById("listBody");		
		var tr:any = document.createElement('tbody');
		var num:number = Number*1; 	
	};
	public pageNumChange(event:any,){
		// allcheck.checked = false;
		// this.default.pageSize=this.itemsPerPage;
		// this.color="#fff"
		// this.serch()
		this.totalPages = event;
	}
	public setPage(pageNo:number):void {
		this.currentPage = pageNo;
	};
// 翻页
	pageChanged(event:any):void {
		// this.default.pageNum = event.page;	
		// allcheck.checked = false;
		// this.color="#fff";
		// this.serch()
	};
// 类管理
// height:any = 352+"px"
	hideLoad:any = true
	hideList:any =  true
	show:any
	setLoadClasses() {
	  	let classes =  {
	    hide: this.hideLoad,      // true
	    // show: !this.show, // false
  		};
		return classes;
	}
	setListClasses() {
	  	let classes =  {
	    hide: this.hideList,      // true
	    // show: !this.show, // false
		};
		return classes;
	}
//tab
	listState:any = 1;
	public get(event:any):void {
		if(event.heading=="接收用户组"){
			this.currentPage = 1;//无法同时修改当前页和每页总数
			this.changeDetectorRef.detectChanges();
			// this.listComment();
			this.listState = 1;
		}
		if(event.heading=="推荐用户组"){
			this.currentPage = 1;//无法同时修改当前页和每页总数
			this.changeDetectorRef.detectChanges();
			// this.getListView();
			this.listState = 2;
		}
	};
	upDateList(){
		if(this.listState == 1){
			// this.listComment();
		}
		if(this.listState == 2){
			// this.getListView();
		}
	}
}