import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import GLOBAL = require('../../../../../../../../../public/in.config');

@Injectable()

export class UserRechargeLogServices {
	private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();
	constructor (private http: Http) {}

	// 用户充值列表
	userRechargeList(obj:Object):Observable<any>{

		let data = JSON.stringify(obj);
		let Url = this.IP+"goldcoin/userrecharge/list";
		// console.log(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(Url, data, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
	// 统计 信息
	totalInfo(obj:Object):Observable<any>{

		let data = JSON.stringify(obj);
		let Url = this.IP+"goldcoin/userrecharge/total";
		// console.log(data);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(Url, data, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
	//导出表格
    exportExcles(obj:Object):Observable<any>{
        let url = this.IP+'goldcoin/userrecharge/export';
        let ser = JSON.stringify(obj);
        console.log(ser)
        console.log(url)
        // debugger;

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
 // exportExcle(obj:Object):Observable<any>{
 //        let url = this.IP+'goldcoin/userrecharge/export?' + obj ;
 //        let ser = JSON.stringify(obj);
 //        // 
 //        console.log(obj)
 //        console.log(url)
 //        // debugger;

 //        // let headers = new Headers({ 'Content-Type': 'application/json' });
 //        // let options = new RequestOptions({ headers: headers });
 //        return url;
 //    }


}