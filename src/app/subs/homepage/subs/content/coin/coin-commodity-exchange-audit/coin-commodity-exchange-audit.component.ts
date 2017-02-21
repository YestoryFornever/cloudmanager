import { Component, ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router }   from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CalendarModule,PickListModule} from 'primeng/primeng';
import { TypeaheadMatch } from 'ng2-bootstrap/components/typeahead/typeahead-match.class';
import { Order,OrderCondition } from './classes/audit-item';
import { OrderListService } from './services/coin-commodity-exchange-audit.service';
@Component({
	selector: 'coin-commodity-exchange-audit',
	templateUrl: './coin-commodity-exchange-audit.component.html',
	styleUrls: [
		'./coin-commodity-exchange-audit.component.css',
		'../../../../css/header.css',
		'../../../../css/table.css',
		'../../../../css/condition.css',
		'../../../../css/pagination.css'
	],
	providers:[
		OrderListService
	]
})
export class CoinCommodityExchangeAuditComponent implements OnInit{
	errorMsg:string;
	order:Order;
	orders:Order[];
	condition:OrderCondition;
	constructor(
		private changeDetectorRef:ChangeDetectorRef,
		private orderListService:OrderListService,
		private activatedRoute:ActivatedRoute,
		private router:Router,
	){
		this.order = new Order();
		this.condition = new OrderCondition();
	}

	ngOnInit() {
		this.getOrders();
	 	this.mon = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
            monthNamesShort: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ]
        };
    }
    mon:any={
        monthNames:[]
    };
	//checkbox
	changeStatus(){
		this.condition.statusOthers();
	}
	changeStatusAll(){
		this.condition.statusAll();
	}
	// 
	getOrders(){
		this.orderListService
			.getOrders(this.condition)
			.subscribe(
				data=>{
					// this.changeDetectorRef.detectChanges();
					this.orders = data["list"];
					if(data["page"]){
						this.condition.totalItems = data["page"]["totalResult"]
					}
					// this.condition.totalItems = data["page"]["totalResult"];
				},
				error=>this.errorMsg = error
			);
	}
	// 查询
	onSubmit(){
		this.condition.currentPage = 1;//无法同时修改当前页和每页总数
		this.changeDetectorRef.detectChanges();
		// this.condition.itemsPerPage = num;
		this.getOrders();
	}
	//获取审核详情
	getAuditDetail(order:Order){
		//console.log(order);
		this.router.navigate(['../audit-details',{goodsExchangesId:order.goodsExchangeId,statusCode:order.statusCode,userName:order.userName,phone:order.phone}],{relativeTo:this.activatedRoute});
	}

	// 分页
	msgNumbers = [10,20,30,50];
	public firstText:string = '首页';
	public lastText:string = '末页';
	public previousText:string = '<';
	public nextText:string = '>';
	public sizeData(num:number){
		this.condition.currentPage = 1;//无法同时修改当前页和每页总数
		this.changeDetectorRef.detectChanges();
		this.condition.itemsPerPage = num;
		this.getOrders();
	};
	// 翻页
	public pageChanged(event:any):void {
		//console.log(event);
		this.condition.currentPage = event.page;
		this.getOrders();
	};
	public pageNumChange(event:any){
		this.condition.totalPages = event;
	}
	public setPage(pageNo:number):void {
		this.condition.itemsPerPage = pageNo;
	};
}