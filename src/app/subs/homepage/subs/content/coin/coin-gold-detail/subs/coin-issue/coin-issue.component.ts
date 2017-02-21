import { Component, ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';
//import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
//import { VersionManagementService } from './services/version-management.service';
import { CoinGoldDetailServices }  from '../../services/coin-gold-detail.services';
//
@Component({
	selector: 'coin-issue',
	templateUrl: './coin-issue.component.html',
	styleUrls: ['./coin-issue.component.css'],
	providers: [CoinGoldDetailServices]
})
export class CoinIssueComponent {

	height= 'auto';
	constructor(
		private changeDetectorRef:ChangeDetectorRef,
		private coinGoldDetailServices:CoinGoldDetailServices
	){}
	// constructor(private UserApproveHistoryService:UserApproveHistoryService){}

	ngOnInit(){
		this.getDetailList();
	};

	default:any={
		pageNum:'1',
		pageSize:'10'
	};
	page:any;
	detailLists:any=[];
	errorMessage :any ;
	// 获取 金币发放记录列表
	getDetailList(){
		this.coinGoldDetailServices.goldRecord(this.default)
	        .subscribe(
	            goldList =>{
	            	if(goldList.status == "0"){
	            		this.detailLists = goldList.data.list;
	            		this.page =  goldList.data.page;
	            		this.totalItems = this.page.totalResult;

	            	}else{
	            		alert(goldList.msg);
	            	}
	                console.log(goldList);
	            },
	            error => this.errorMessage = <any>error
	        );
	}
	phoneObj:any={
		phone:""
	};
	userInfo:any={
		data:"",
		msg:"",
		status:"",
	};
	// 匹配手机号
	getPhoneMsg(){
		console.log(this.phoneObj);

		this.coinGoldDetailServices.matchPhone(this.phoneObj)
	        .subscribe(
	            phoneMsg =>{
	            	if(phoneMsg.status ==0){
	            		this.sendGoldsOnOff = true;
	            		this.userInfo = phoneMsg;
	            	}else{
	            		this.sendGoldsOnOff = false;
	            		this.phoneObj.phone = "";
	            		this.userInfo.data ="无结果";
	            	}
	            	// else{
	            	// 	this.userInfo.
	            	// }
	                console.log(phoneMsg);
	            },
	            error => this.errorMessage = <any>error
	        );
	}
	sendInfo:any ={
		phone:"",
		coinNumber:"",
		// messageTitle:""	,
		messageBody:""	,

	};
	changeNum(value:any){
		// debugger

		this.sendInfo.coinNumber = this.sendInfo.coinNumber.replace(',','').toString();
		this.sendInfo.coinNumber = parseInt(this.sendInfo.coinNumber);
		if(isNaN(this.sendInfo.coinNumber)){
			this.sendInfo.coinNumber = "";
			// alert('输入有误，请重新输入')
			return ;
		}
		let reg = /^\+?(\d|[1-9]\d{1,3}|[5-9]\d{1,2})(\.\d*)?$/;
		// let reg2 = /(^[1-4]\d{4} | 5000)/;
		if(reg.test(this.sendInfo.coinNumber)){
			this.sendInfo.coinNumber = (this.sendInfo.coinNumber ).toString();
			// console.log(this.sendInfo.coinNumber)
			if(this.sendInfo.coinNumber.length==4){
				if(this.sendInfo.coinNumber>5000){
					this.sendInfo.coinNumber = '5,000';
					return false;
				}
				// console.log(this.sendInfo.coinNumber.substr(0,1) + '==='+ this.sendInfo.coinNumber.substr(1))
				this.sendInfo.coinNumber = this.sendInfo.coinNumber.substr(0,1)+ ',' + this.sendInfo.coinNumber.substr(1)

			}
		}
		else{
			this.sendInfo.coinNumber = this.sendInfo.coinNumber+'';
			if(this.sendInfo.coinNumber.length>4){
				this.sendInfo.coinNumber = '5,000';
				// this.sendInfo.coinNumber = this.sendInfo.coinNumber.substr(0,1)+ ',' + this.sendInfo.coinNumber.substr(1,3)
			}
			if(this.sendInfo.coinNumber>5000){
				this.sendInfo.coinNumber = '5,000';
			}
			// console.log(111)
			// this.sendInfo.coinNumber = this.sendInfo.coinNumber.substr(6);
		// console.log(this.sendInfo.coinNumber.substr(6))

		}
	}
	// 发放金币弹窗出现
	alertShow(alertBox:any){

		this.infoReset();
		alertBox.show();
	}
	disabledBtn:any = true;//禁用提交按钮
	sendGoldsOnOff:boolean=false;//验证是否匹配手机号
	// 发放金币
	sendGolds(alertHide:any){
		this.sendInfo.phone = this.phoneObj.phone;
		if(this.sendInfo.phone == ""){
			alert("请输入手机号");
			return false;
		}
		if(this.sendInfo.coinNumber == null || this.sendInfo.coinNumber==''){
			alert("请输入正确的金币数量");
			return false;
		}
		if(this.sendInfo.coinNumber <0){
			alert("请输入正确的金币数量");
			return false;
		}
		this.sendInfo.coinNumber = this.sendInfo.coinNumber.split(',').join('');
		if(this.sendInfo.messageBody == ""){
			alert("请输入内容");
			return false;
		}
		console.log(this.sendInfo);

		if(this.sendGoldsOnOff){
			if(this.disabledBtn){
				this.disabledBtn = false;
				console.log(this.disabledBtn)
				this.coinGoldDetailServices.sendGold(this.sendInfo)
		        	.subscribe(
			            sendData =>{

			            	if(sendData.status==0){

			            		alert(sendData.msg);
			            		alertHide.hide();
			            		this.getDetailList();
			            		// this.infoReset();


			            	}else{
			            		// debugger;
			            		alert(sendData.msg);
			            		// alertHide.hide();
			            	}

			            },
			            error => this.errorMessage = <any>error
			        );
			}
		}else{
			alert('请进行匹配。');
		}
	}
	unSubmit(alertHide:any){
		this.infoReset();
		alertHide.hide();
	}
	// 重置
	infoReset(){
		for (let i in this.sendInfo){
			this.sendInfo[i]="";
		}
		this.disabledBtn = true;
		this.userInfo.data="";
		this.phoneObj.phone = "";
	}

// 分页
	msgNumbers = [{Number:'10'},{Number:'20'},{Number:'30'},{Number:'40'},{Number:'50'}];

// 分页
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
		this.getDetailList();

	}
	public sizeData(Number:any){
		this.height = Number*40+40+'px';
		// this.currentPage = 1;//无法同时修改当前页和每页总数
		// this.changeDetectorRef.detectChanges();
		this.itemsPerPage = Number;
		this.turnFirst()
		this.height = Number*40+120+'px';
		var listBody:any = document.getElementById("listBody");
		var tr:any = document.createElement('tbody')
		var num:number = Number*1;
	};

	public pageNumChange(event:any,allcheck:any){

		this.default.pageSize = this.itemsPerPage;
		// this.getUserBackList();
		this.totalPages = event;
	}
	public setPage(pageNo:number):void {
		// this.getUserBackList();
		this.currentPage = pageNo;
	};
// 翻页
	pageChanged(event:any,allcheck:any):void {
		this.default.pageNum = event.page;
		this.getDetailList();

		// this.onSearch();
	};
}