import { Component,ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router }   from '@angular/router';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';
import {CustomerManageService} from '../../../services/customer-manage.service';

@Component({
	selector: 'customer-manage-list.component',
	templateUrl: './customer-manage-list.component.html',
	styleUrls: ['./customer-manage-list.component.css'],
	providers: [CustomerManageService]
})
export class CustomerManageListComponent  implements OnInit{


	constructor(private changeDetectorRef:ChangeDetectorRef,
		private customerManageService:CustomerManageService,
		private activatedRoute:ActivatedRoute,
		private router:Router){}

	ngOnInit(){
		this.queryAllEmployment()
	};
	height = '440px';
	msgNumbers = [{Number:'10'},{Number:'20'},{Number:'30'},{Number:'50'}];
// /即时搜索
	public stateCtrl:FormControl = new FormControl();
	public myForm:FormGroup = new FormGroup({
		state: this.stateCtrl
	});
	public customSelected:string = '';
	// public usernameSelected:string = '';
	public dataSource:Observable<any>;
	public asyncSelected:string = '';
	public typeaheadLoading:boolean = false;
	public typeaheadNoResults:boolean = false; 
	public companys:Array<string>;
	public departments:Array<string>;  
	public typeaheadOnCompanys(e:TypeaheadMatch):void{
	   // this.default.organizationId = e.item.organizationId;//id 赋值给隐藏的input。获取公司id 
	}
	public typeaheadOnDepartments(e:TypeaheadMatch):void{
	    
	    // this.default.departmentId = e.item.departmentId;
	} 

 errorMessage:any
//客户经理列表查询
	customerList:any
	queryAllEmployment(){
		this.hideList = true;
		this.hideLoad = false;
		 this.customerManageService.queryAllEmployment(null) 
	        .subscribe(
	            customerList => {
	            	console.log(customerList)
	                if(customerList.status==0){
	                    this.customerList=customerList.data;
	                    this.hideList = false;
						this.hideLoad = true;
	                }else{
	                	if(customerList.msg){
	                		 alert(this.customerList.msg);
	                		 this.hideList = false;
							this.hideLoad = true;
	                	}
	                }
	            }, 
	            error => this.errorMessage = <any>error
	        ); 
	}
// 类管理
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
	// 跳转
	toChange(newsId:any,loginName:any,userName:any){
	   this.router.navigate(['../customer-manage-serch',newsId,loginName,userName],{relativeTo:this.activatedRoute}); 
	}
}
