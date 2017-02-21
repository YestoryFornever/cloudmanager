import GLOBAL = require('../../../../../../../../public/in.config');
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { NavDynamic,Nav } from '../classes/nav-dynamic';
@Injectable()
export class NavDynamicService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private HandleError = GLOBAL.INCONFIG.handleError();
	constructor(private http:Http){}

	getNavs():Observable<NavDynamic>{
		let url = this.IP+'back/authority/getMenuList';
		let body = JSON.stringify({
			"parentMenuId":"1"
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}
	getMockNavs(){
		return {
			items:[
				{
					label:"用户列表",
					router_id:"user-list"
				},
				{
					label:"添加用户",
					router_id:"user-edit"
				},
				{
					label:"用户审核",
					router_id:"user-approve"
				},
				{
					label:"审核历史",
					router_id:"user-approve-history"
				}
			],
			group:'用户管理',
			showNavDynamic:false
		}
	}
	
}
