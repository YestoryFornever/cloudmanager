import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';

import { User } from './classes/user-edit';

import { UserEditService } from './services/user-edit.service';
@Component({
	selector: 'alphain-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: [
		'./user-edit.component.css',
		'../../../../css/header.css'
	],
	providers:[UserEditService]
})
export class UserEditComponent implements OnInit{
	/*test*/
	data:any;
	test(){
		console.info("测试");
		this.isSaving=true;
		console.log(!this.user_edit_form.form.valid||this.isSaving);
	}
	user:User;
	data_head_thumbnail:Object;
	data_referrer_phonenum:Object;
	users:User[];
	errorMsg:string;
	isAdd:boolean;
	submitted:boolean;
	isSaving:boolean=false;
	editErrorMsg:string="";
	/*生命周期*/
	constructor(
		private userEditService:UserEditService,
		private activatedRoute:ActivatedRoute,
		private router:Router
	){
		this.user = new User();
		this.isAdd = true;
		this.submitted = false;
		this.dataSourceOrgs = Observable.create((observer:any) => {
			observer.next(this.user.company);
		}).mergeMap((token:string) => this.getOrgsAsObservable(token));
		this.dataSourceDeps = Observable.create((observer:any) => {
			observer.next(this.user.department);
		}).mergeMap((token:string) => this.getDepsAsObservable(token));
	}
	//ngOnChanges(){console.log('changes');}
	ngOnInit(){
		this.activatedRoute.params.forEach((params:Params)=>{
			let id = +params['id'];
			if(id){
				this.getUser(id);//根据用户id获取数据接口未完成
				this.isAdd = false;
			}
		});
		//console.log('init')
		this.getOrgs();
		this.getDeps();
		alert(1);
	}
	/*ngDoCheck(){console.log('docheck')}
	ngAfterContentInit(){console.log('AfterContentInit')}
	ngAfterContentChecked(){console.log('AfterContentChecked');}
	ngAfterViewInit(){console.log('AfterViewInit')}*/
	ngAfterViewChecked(){
		this.formChanged();
	}
	//ngOnDestroy(){console.log('OnDestroy')}
	private handleString(key:any){
		if(!key) {
			return ''
		}
		return String(key);
	};
	/*获取用户*/
	getUser(id:any){
		this.userEditService
			.getUser(id)
			.subscribe(
				data => {
					// debugger;
					this.user.id = this.handleString(data.userId);
					this.user.phone = this.handleString(data.loginName);
					this.user.head_thumbnail_url = this.handleString(data.iconUrl);
					this.user.name = this.handleString(data.userName);
					this.user.companyId = this.handleString(data.organizationId);
					this.user.company = this.handleString(data.organizationFullName);
					this.user.departmentId = this.handleString(data.departmentId);
					this.user.department = this.handleString(data.department);
					this.user.position = this.handleString(data.position);
					this.user.contact = this.handleString(data.contactPhone);
					this.user.work_contact = this.handleString(data.workPhone);
					this.user.mail = this.handleString(data.companyMail);
					this.user.work_address = this.handleString(data.workAddress);
					this.user.nickname = this.handleString(data.nickname);
					this.user.sex = this.handleString(data.gender);
					data.birthday && (this.user.birthday = new Date(data.birthday));
					this.user.home_address = this.handleString(data.hometown);
					this.user.qq_num = this.handleString(data.qqId);
					this.user.wechat_num = this.handleString(data.wechatId);
					this.user.referrer_phonenum = this.handleString(data.referralLogin);
					this.user.referrerid = this.handleString(data.referralCode);
					this.user.referrer = this.handleString(data.referralUserName);
					this.user.name_card_url = this.handleString(data.businessCardUrl);
					this.user.userStatus = this.handleString(data.userStatus);
					this.user.approveStatus = this.handleString(data.realCertifyStatus);
					this.user.mailModel = this.handleString(data.emailCertifyStatus);
					this.user.visitModel = this.handleString(data.visitStatus);
					this.user.backup = this.handleString(data.remark);
				},
				error => this.errorMsg = <any>error
			);
	}
	/*添加用户*/
	userAdd(form:any){
		this.isSaving = true;
		let user = this.user;
		this.userEditService
			.addUser(user)
			.subscribe(
				result => {
					if(result.status==="0"){
						this.submitted = true;
					}else{
						alert(result.msg);
					}
					this.isSaving = false;
				},
				error => this.errorMsg = <any>error
			);
		//console.log(JSON.stringify(this.user));
	}
	/*修改用户*/
	userEdit(form:any){
		// debugger;
		this.isSaving = true;
		let user = this.user;
		this.userEditService
			.editUser(user)
			.subscribe(
				result => {
					if(result.status==="0"){
						this.submitted = true;
					}else if(result.status==="203003"){
						this.editErrorMsg = result.msg;
					}else{
						alert(result.msg);
					}
					this.isSaving = false;
				},
				error => this.errorMsg = <any>error
			);
		//console.log(JSON.stringify(this.user));
	}
	/*获取公司*/
	getOrgs(){
		this.userEditService
			.getOrgs()
			.subscribe(
				orgs => {
					//debugger;
					this.orgs = orgs;
				},
				error => this.errorMsg = <any>error
			);
	}
	/*获取部门*/
	getDeps(){
		this.userEditService
			.getDeps()
			.subscribe(
				deps => {
					// debugger;
					this.deps = deps;
				},
				error => this.errorMsg = <any>error
			);
	}
	
	routeAddUser(){
		this.userReset();
		this.submitted = false;
		this.isAdd = true;
	}
	/*重置*/
	resetTrigger:boolean=true;
	userReset(){
		this.user.reset();
		this.resetTrigger=this.resetTrigger?false:true;
		setTimeout(()=>this.formErrors={
			'phone':'',
			'name':'',
			'company':'',
			'position':'',
			'contact':'',
			'work_contact':'',
			'mail':'',
			'work_address':'',
			'referrer_phonenum':'',
			'name_card_url':''
		},0);
	}
	/*重置用户密码*/
	resetPassword(){
		this.userEditService
			.resetPassword(this.user.id)
			.subscribe(
				result => {
					if(result.status==="0"){
						alert("重置用户密码成功");
					}else{
						alert(result.msg);
					}
				},
				error => this.errorMsg = <any>error
			);
	}
	/*放弃编辑|回到列表*/
	userCancel(isAdd:boolean){
		if(isAdd){
			this.router.navigate(['../user-list'],{relativeTo:this.activatedRoute});
		}else{
			this.router.navigate(['../../user-list'],{relativeTo:this.activatedRoute});
		}
	}
	/*获取推荐人*/
	getReferrer(referrer_phonenum:any,referrer:any){
		let phonenum = referrer_phonenum.value;
		this.userEditService
			.getReferrer(phonenum)
			.subscribe(
				data => {
					console.log(data);
					this.user.referrerid = data.userId;
					this.user.referrer = data.userName||"无";
				},
				error => this.errorMsg = <any>error
			);
	}
	/*公司失焦清空*/
	blurCompany(el:any,e:any){
		if(!this.user.companyId){
			//el.value = "";
			this.user.company = "";
		}
	}
	changeCompany(el:any,e:any){
		this.user.companyId = "";
	}
	/*注册手机号失焦*/
	blurPhone(el:any){
		if(this.isAdd){
			this.userEditService
				.checkAccont(this.user.phone)
				.subscribe(
					result => {
						if(result.status==="202002"){
							alert(result.msg);
							this.user.phone="";
						}
					},
					error => this.errorMsg = <any>error
				);
		}
	}

	/*图片预览*/
	head_thumbnail_data = function(file_data:any){
		this.user.head_thumbnail = file_data;
	}
	name_card_data = function(file_data:any){
		this.user.name_card = file_data;
	}
	name_card_url = function(file_url:any){
		this.user.name_card_url = file_url;
	}

	/*表单校验*/
	user_edit_form:NgForm;
	@ViewChild('user_edit_form') currentForm:NgForm;
	formChanged(){
		if(this.currentForm === this.user_edit_form){return;}
		this.user_edit_form = this.currentForm;
		if(this.user_edit_form){
			this.user_edit_form.valueChanges
				.subscribe(data=>this.onValueChanged(data));
		}
	}
	onValueChanged(data?:any){
		if(!this.user_edit_form){return;}
		const form = this.user_edit_form.form;
		// debugger;
		for(const field in this.formErrors){
			this.formErrors[field]='';
			const control = form.get(field);
			if(control && control.dirty && !control.valid){
				const messages = this.validationMessages[field];
				for(const key in control.errors){
					this.formErrors[field]+=messages[key]+' ';
				}
			}
		}
	}
	formErrors = {
		'phone':'',
		'name':'',
		'company':'',
		'position':'',
		'contact':'',
		'work_contact':'',
		'mail':'',
		'work_address':'',
		'referrer_phonenum':'',
		'name_card_url':''
	}
	validationMessages = {
		'phone':{
			'required':'注册手机号不能为空',
			'minlength':'注册手机号不足11位',
			'maxlength':'注册手机号超过11位',
			'pattern':'非数字字符'
		},
		'name':{
			'required':'姓名不能为空'
		},
		'company':{
			'required':'公司不能为空'
		},
		'position':{
			'required':'职位不能为空'
		},
		'contact':{
			'required':'联系电话不能为空'
		},
		'work_contact':{
			'required':'工作电话不能为空'
		},
		'mail':{
			'required':'公司邮箱不能为空',
			'pattern':'邮箱格式不正确'
		},
		'work_address':{
			'required':'工作地址不能为空',
		},
		'referrer_phonenum':{
			'minlength':'手机号不足11位',
			'maxlength':'手机号超过11位',
			'pattern':'非数字字符'
		},
		'name_card_url':{
			'required':'名片不能为空'
		}
	}
	//获取公司
	public orgs:Array<any>;
	public orgsLoading:boolean = false;
	public orgsNoResults:boolean = false;
	public changeOrgsLoading(e:boolean):void {
		this.orgsLoading = e;
	}
	public changeOrgsNoResults(e:boolean):void {
		this.orgsNoResults = e;
	}
	public orgsOnSelect(e:TypeaheadMatch):void {
		console.log('设置公司为:', e.value);
		this.user.companyId = e.item.organizationId;
	}
	public dataSourceOrgs:Observable<any>;
	public getOrgsAsObservable(token:string):Observable<any> {
		let query = new RegExp(token, 'ig');
		return Observable.of(
			this.orgs.filter((status:any) => {
				return query.test(status.organizationShortName);
			})
		);
	}
	//获取部门
	public deps:Array<any>;
	public depsLoading:boolean = false;
	public depsNoResults:boolean = false;
	public changeDepsLoading(e:boolean):void {
		this.depsLoading = e;
	}
	public changeDepsNoResults(e:boolean):void {
		this.depsNoResults = e;
	}
	public depsOnSelect(e:TypeaheadMatch):void {
		console.log('设置部门为:', e.value);
		//debugger;
		this.user.departmentId = e.item.departmentId;
	}
	public dataSourceDeps:Observable<any>;
	public getDepsAsObservable(token:string):Observable<any> {
		let query = new RegExp(token, 'ig');
		return Observable.of(
			this.deps.filter((status:any) => {
				return query.test(status.departmentName);
			})
		);
	}
}