import GLOBAL = require('../../../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { GroupSearchList}       from '../classes/group-search';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}
 
@Injectable()

export class GroupSearchService {
	private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}
//查询群列表
    searchGroupList(obj:Object):Observable<any>{
        // let url="http://192.168.0.102:9999/emanager/group/selGroupList";
        let url = this.IP+'group/selGroupList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }

}