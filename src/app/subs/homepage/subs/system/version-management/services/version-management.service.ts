import GLOBAL = require('../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { verCondition }       from '../classes/version';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export class VersionManagementService {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}
   //查询版本列表
	lookupVersionList(condition:verCondition):Observable<any>{
        let url = this.IP+'appVersion/list';
		let ser = JSON.stringify({
			'pageNum':condition.currentPage,
			'pageSize':condition.itemsPerPage,
			'versionId':condition.versionId,
			'versionType':condition.versionType,
			'releaseStartTime':condition.releaseStartTime,
			'releaseEndTime':condition.releaseEndTime,
			'versionState':condition.versionState
		});
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, ser, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
	//添加版本信息
	addVersionInfor(obj:Object):Observable<any>{
        // let url="http://192.168.0.164:8080/emanager/appVersion/add";
        let url = this.IP+'appVersion/add';
		let ser = JSON.stringify(obj);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, ser, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
	//修改版本信息
	modifyVersionInfor(obj:Object):Observable<any>{
        // let url="http://192.168.0.164:8080/emanager/appVersion/update";
        let url = this.IP+'appVersion/update';
		let ser = JSON.stringify(obj);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, ser, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}


}