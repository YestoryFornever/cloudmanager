import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { EventClass } from '../classes/events';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class EventFollowService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private ExtractResult = GLOBAL.INCONFIG.extractResult();
	private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}

	getEvents (eventparam:EventClass): Observable<Event[]> {
		// debugger;
		let url = this.IP+'back/authority/queryOrganizationList';
		let body = JSON.stringify({});
		let options = new RequestOptions({ headers: this.JH });
		return this.http
			.post(url, body, options)
			.map(this.ExtractData)
			.catch(this.HandleError);
	}
}
