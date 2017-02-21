import GLOBAL = require('../../../../../../../../../../../public/in.config')
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { GroupEditMemberList}  from '../classes/group-edit-member';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}
 
@Injectable()

export class GroupEditMemberService {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();

    constructor (private http: Http) {}

//post数据
    postgroupListMsge(obj:Object):Observable<any>{
        let url = this.IP+'group/groupList';
        //let url = this.IP+'/back/authority/queryUserList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
//模糊查询
    postcheckMsge(obj:Object):Observable<any>{
        let url = this.IP+'userGroup/getGroupUserList';
        //let url = this.IP+'/back/authority/queryUserList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
//保存接口
     postallMsge(obj:Object):Observable<any>{
        let url = this.IP+'userGroup/updateGroupUser';
        //let url = this.IP+'/back/authority/queryUserList';
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }

    
}