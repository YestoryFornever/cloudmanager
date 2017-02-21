import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Organization, OrgCondition } from '../classes/organizations';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class OrganizationStatisticsService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private ExtractResult = GLOBAL.INCONFIG.extractResult();
	private HandleError = GLOBAL.INCONFIG.handleError();
    private UserMsgeUrl = 'app/userMsges';
	constructor (private http: Http) {}	
    //获取机构列表
    OrganizationList(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/getOrganizationList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    StatisticsList(obj:Object):Observable<any>{
        let url = this.IP+'statistics/getCategoryStatisticsList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
}
