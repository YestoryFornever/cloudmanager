import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Role }           from '../../../classes/role';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class AuthRoleManageAuthorizationService {
	//private rolesUrl = 'app/auth_roles/';  // URL to web API

	constructor (private http: Http) {}

	/*getRoles (name?:string,code?:string): Observable<Role[]> {
		let url = this.rolesUrl;
		if(name||code){
			url+="?"
			if(name){url+=`name=${name}&`}
			if(code){url+=`code=${code}&`}
			url=url.substring(0,url.length-1);
		}
		return this.http.get(url)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}*/
}