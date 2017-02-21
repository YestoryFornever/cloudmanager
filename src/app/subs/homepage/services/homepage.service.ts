import GLOBAL = require('../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HomepageService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private ExtractResult = GLOBAL.INCONFIG.extractResult();
	private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}

	getUser(): Observable<any> {
		let url = this.IP+'security/getLoginUser';
		let body = JSON.stringify({});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}
	updatePwd(oldPwd:string, newPwd:string ): Observable<any> {
		let url = this.IP+'security/updateMyPassword';
		let body = JSON.stringify({
			"oldPassword":oldPwd,
			"newPassword":newPwd
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
}