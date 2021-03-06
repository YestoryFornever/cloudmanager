import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}

@Injectable()

export class UserListService {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}
   //获取用户列表
	postListMsge(obj:Object):Observable<any>{
        // let url="http://192.168.0.102:9999/emanager/back/authority/queryUserList";
        let url = this.IP+'back/authority/queryUserList';
		let ser = JSON.stringify(obj);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, ser, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
    //获取公司列表
    OrganizationList(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/getOrganizationList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
     //获取部门列表
    DepartmentList(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/getDepartmentList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //回访
    visitUser(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/visitUser';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //冻结
    frozenUser(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/frozenUser';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //解冻
    unFrozenUser(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/unFrozenUser';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //导出表格
    exportUserLists(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/exportUserList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //查询列标题设置
    ColumnHeadingList(obj:Object):Observable<any>{
         let url = this.IP+'back/authority/queryColumnHeadingList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //提交更新列标题
    updateColumnHead(obj:Object):Observable<any>{
         let url = this.IP+'back/authority/updateColumnHeading';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //检查认证状态
    checkStauts(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/findRealCertify';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    } 
    //变更认证状态
    realyAuth(obj:Object):Observable<any>{
        let url = this.IP+'back/authority/updateRealCertifyAuditFail';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }





}