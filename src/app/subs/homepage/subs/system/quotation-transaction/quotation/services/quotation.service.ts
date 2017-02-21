import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()

export class LookQuotationService {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}

 // get(){

 //     let str:any= "http://11.177.15.104:8080/emanager/";
 //    return str.replace(/emanager/g, "e-bondquote");
      
      
 // }
 

   //查询报价列表
	 getBondList(obj:Object):Observable<any>{
        // debugger;
        // this.Ip=get();
        let url=this.IP+"bondOfr/queryBondEManager";
        let ser=JSON.stringify(obj);
        let options = new RequestOptions({ headers: this.JH });
        return this.http.post(url, ser, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }

    // 债券搜索
    searchBond(str:any):Observable<any>{
        // debugger;
        // this.Ip=get();
        // let url=this.IP+"ainas/bond/fuzzyMatchingForBond";
                let url="http://11.177.15.104/ainas/bond/fuzzyMatchingForBond";
        let ser=JSON.stringify(str);
        let options = new RequestOptions({ headers: this.JH });
        return this.http.post(url, ser, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }










	//添加版本信息
	// addVersionInfor(obj:Object):Observable<any>{
        // let url="http://192.168.0.164:8080/emanager/appVersion/add";
  //       let url = this.IP+'appVersion/add';
		// let ser = JSON.stringify(obj);
		// let headers = new Headers({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		// return this.http.post(url, ser, options)
		// 				.map(this.ExtractResult)
		// 				.catch(this.HandleError);
	// }
	//修改版本信息
	// modifyVersionInfor(obj:Object):Observable<{
        // let url="http://192.168.0.164:8080/emanager/appVersion/update";
  //       let url = this.IP+'appVersion/update';
		// let ser = JSON.stringify(obj);
		// let headers = new Headers({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		// return this.http.post(url, ser, options)
		// 				.map(this.ExtractResult)
		// 				.catch(this.HandleError);
	// }


}