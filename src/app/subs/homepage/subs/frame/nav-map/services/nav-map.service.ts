import GLOBAL = require('../../../../../../../../public/in.config');
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
@Injectable()
export class NavMapService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private HandleError = GLOBAL.INCONFIG.handleError();
	private isProd = GLOBAL.INCONFIG.prod;
	
	private url = 'app/nav_map_real/';  // URL to web API
	
	constructor (private http: Http) {}
	
	getNavMap(): Observable<any> {
		let url = this.IP+'security/menu/getMenuList';
		let body = JSON.stringify({
			//"parentMenuId":"0"
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.isProd?this.ExtractData:this.extractData)
						.catch(this.HandleError);
	}
	extractData(){
		return [
			{
				label:"内容管理",
				level:[
					{
						label:'同业圈',
						level:[
							{
								label:'资讯管理',
								routerlink:"./sns-news-management"
							},
							{
								label:'快讯管理',
								routerlink:"./sns-news-flash-management"
							},
							{
								label:'动态管理',
								routerlink:"./sns-share-management"
							},
							{
								label:'评论管理',
								routerlink:"./sns-comments-history"
							},
							// {
							// 	label:'聚合标签管理',
							// 	routerlink:"./sns-tags-management"
							// },
							{
								label:'资讯来源管理',
								routerlink:"./sns-source-management"
							},
							{
								label:'数据统计',
								routerlink:"./sns-statistics-component"
							}
						]
					},
					{
						label:'客户经理管理',
						level:[
							{
								label:'客户经理维护',
								routerlink:"./customer-manage"
							},
							{
								label:'联系人维护',
								routerlink:"./contact-manage"
							},
							{
								label:'行动维护',
								routerlink:"./action-manage"
							},
						]
					},
					{
						label:'群组',
						level:[
							{
								label:'群组管理',
								routerlink:"./group-management"
							},
						]
					},
					{
						label:'金币',
						level:[
							{
								label:'礼品管理',
								routerlink:'./coin-gift-management'
							},
							{
								label:'上架商品管理',
								routerlink:'./coin-stores-goods-management'
							},
							{
								label:'商品兑换审核',
								routerlink:'./coin-commodity-exchange-audit'
							},
							{
								label:'金币收支统计',
								routerlink:'./coin-gold-statistics'
							},
							{
								label:'金币收支明细',
								routerlink:'./coin-gold-detail'
							},
							{
								label:'金币发放',
								routerlink:'./coin-gold-detail/coin-issue'
							},
							{
								label:'用户充值记录',
								routerlink:'./user-recharge-log'
							},
							{
								label:'发票管理',
								routerlink:'./invoice-management'
							},
							{
								label:'轮播图管理',
								routerlink:'./coin-shuffling-figure-management'
							},
						]
					},
					{
						label:'公众号',
						level:[
							{
								label:'负面资讯列表',
								routerlink:"./bad-list"
							},
							{
								label:'公众号资讯',
								routerlink:"./banner-management"
							},
							// {
							// 	label:'获奖人员管理',
							// 	routerlink:"./award-management"
							// },
							// {
							// 	label:'用户列表管理',
							// 	routerlink:"./user-management"
							// },
						]
					},
				]
			},
			{
				label:"用户管理",
				level:[
					{
						label:'用户管理',
						level:[
							{
								label:'用户列表',
								routerlink:"./user-list"
							},
							{
								label:'添加用户',
								routerlink:"./user-edit"
							},
							{
								label:'用户审核',
								routerlink:"./user-approve"
							},
							{
								label:'审核历史',
								routerlink:"./user-approve-history"
							},
							{
								label:'用户反馈',
								routerlink:"./user-back"
							},
							{
								label:'用户日志',
								routerlink:"./user-log"
							},
							{
								label:'管理员管理',
								routerlink:"./user-administrate"
							}

							
						]
					},
					{
						label:'管理员管理',
						level:[
							{
								label:'管理员管理',
								routerlink:"./user-administrate"
							},
							{
								label:'用户组维护',
								routerlink:"./user-form"
							},
							{
								label:'VIP服务',
								routerlink:"./user-form/user-form-vip"
							},
							{
								label:'用户关系查询',
								routerlink:"./user-relation"
							}
						]
						// organization-statistics
					},
					{
						label:'机构管理',
						level:[
							{
								label:'机构列表',
								routerlink:"./organization-list"
							},
							{
								label:'机构分类统计',
								routerlink:"./organization-statistics"
							},
						]
						// organization-statistics
					},
					{
						label:'权限设置',
						level:[
							{
								label:'角色管理',
								routerlink:'./auth-role-manage'
							},
							{
								label:'权限管理',
								routerlink:'./permission-group'
							},
							{
								label:'用户分组',
								routerlink:'./auth-user-group'
							},
							{
								label:'数据项设置',
								routerlink:'./auth-data-item'
							},
							{
								label:'菜单按钮设置',
								routerlink:'./auth-menu-btn-setting'
							}
						]
					}
				]
			},
			{
				label:"系统管理",
				level:[
					{
						label:'app版本管理',
						level:[
							{
								label:'版本发布管理',
								routerlink:"./version-management"
							},
							{
								label:'用户信息管理',
								routerlink:"./user-info"
							},
						]
					},
					{
						label:'应用设置',
						level:[
							{
								label:'参数设置',
								routerlink:"./parameter-set"
							},
						]
					}
					// {
					// 	label:'交易',
					// 	level:[
					// 		{
					// 			label:'查询报价',
					// 			routerlink:"./quotation"
					// 		},
					// 		{
					// 			label:'客服代挂',
					// 			routerlink:"./customerhang"
					// 		}
					// 	]
					// }
				]
			},
			{
				label:"业务管理",
				level:[
					
					{
						label:'债券报价',
						level:[
							{
								label:'查询报价',
								routerlink:"./quotation"
							},
							{
								label:'客服代挂',
								routerlink:"./customerhang"
							}
						]
					}
				]
			},
			{
				label:"事务管理",
				level:[
					
					{
						label:'事件管理',
						level:[
							{
								label:'事件追踪',
								routerlink:"./event-follow"
							}
						]
					}
				]
			}
		];
	}
}