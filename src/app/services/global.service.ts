import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class GlobalService {
	prod:boolean;
	projectName:string;
	JsonHeaders:Headers;
	FormDataHeaders:Headers;
	private PRIVATECONFIG:any;
	constructor (private http: Http) {
		this.prod = false;
		this.projectName = "cloudmanager";
		this.JsonHeaders = new Headers({ 'Content-Type': 'application/json' });
		this.FormDataHeaders = new Headers({});
		this.PRIVATECONFIG = {
			ip:"http://11.177.15.104:8080/cloudmanager/",
			USERINFO:{}
		}
	}
	post(url:string,obj:Object,isFormData:boolean){
		url = this.getIP()+url;
		let body = JSON.stringify(obj);
		let options = isFormData?
			new RequestOptions({ headers: this.JsonHeaders }):
			new RequestOptions({ headers: this.FormDataHeaders });
		return this.http
			.post(url, body, options)
			.map(this.extractData())
			.catch(this.handleError());
	}
	getIP(){
		return this.prod?"":this.PRIVATECONFIG.ip;
	}
	extractData() {
		let prod = this.prod;
		let projectName = this.projectName;
		return function(res: Response){
			let body = res.json();
			if(!prod){
				body.status==="0"?console.info(`${body.status}:${body.msg}`):console.warn(`${body.status}:${body.msg}`);
			}
			if(body.status==="-5"){
				window.location.href = `/${projectName}/login?relogin=true`;
			}else{
				return body.data || { };
			}
		}
	}
	extractResult() {
		let prod = this.prod;
		let projectName = this.projectName;
		return function(res: Response){
			let body = res.json();
			if(!prod){
				body.status==="0"?console.info(`${body.status}:${body.msg}`):console.warn(`${body.status}:${body.msg}`);
			}
			if(body.status==="-5"){
				window.location.href = `/${projectName}/login?relogin=true`;
			}else{
				return body || { };
			}
		}
	}
	handleError() {
		return function(error: any){
			let errMsg = (error.message) ? error.message :
				error.status ? `${error.status} - ${error.statusText}` : 'Server error';
			console.error(errMsg); // log to console instead
			return Observable.throw(errMsg);
		}
	}
	getRoute(){
		let jsroute = document.getElementById("jsroute")["value"];
		return (jsroute == "null" || !this.prod) ? "homepage" : jsroute;
	}
	getUserInfo(){
		return this.PRIVATECONFIG.USERINFO;
	}
	setUserInfo(obj:Object){
		this.PRIVATECONFIG.USERINFO = obj;
	}
}
