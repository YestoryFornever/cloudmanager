import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { AdministrateRole } from '../classes/user-administrate';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}

@Injectable()

export class UserAdministrateService {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();
    private extractData = GLOBAL.INCONFIG.extractData();
    private HandleError = GLOBAL.INCONFIG.handleError();
    //private  administrateAdd="http://127.0.0.1:8080/emanager/security/admin/add"
    constructor (private http: Http ) { }
    getAdminList(obj:Object):Observable<any>{
        // debugger;
        let url=this.IP+"security/admin/queryUserList";
        let ser=JSON.stringify(obj);
        let options = new RequestOptions({ headers: this.JH });
        return this.http.post(url, ser, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
    addAdminstrate(obj:Object) :Observable<any>{
         // debugger;
        let url=this.IP+"security/admin/add";
        let ser=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
    editAdmin(obj:Object) :Observable<any>{
        // debugger;
        let url=this.IP+"security/admin/update";
        let ser=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
    getRolecate(obj:Object):Observable<any>{
        let url=this.IP+"security/role/getRoles";
        let body=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,body,options)
            .map(this.ExtractResult)
            .catch(this.HandleError);

    }
    getDetail(obj:Object){
        let url=this.IP+"security/admin/getDetail";
        let body=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,body,options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
    resetPassword(obj:Object){

        let url=this.IP+"security/admin/resetPassword";
        let body=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,body,options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
// 冻结管理员
    updateStatus(obj:Object){
        // debugger;
        let url=this.IP+"security/admin/updateStatus";
        let body=JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url,body,options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }



}