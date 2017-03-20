import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export const INCONFIG = {
	prod:false,
	projectName:"cloudmanager",
	getIP(){
		return this.prod?"":PRIVATECONFIG.ip;
	},
	JsonHeaders: new Headers({ 'Content-Type': 'application/json' }),
	FormDataHeaders: new Headers({}),
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
	},
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
	},
	handleError() {
		return function(error: any){
			let errMsg = (error.message) ? error.message :
				error.status ? `${error.status} - ${error.statusText}` : 'Server error';
			console.error(errMsg); // log to console instead
			return Observable.throw(errMsg);
		}
	},
	getRoute(){
		let jsroute = document.getElementById("jsroute")["value"];
		return (jsroute == "null" || !this.prod) ? "homepage" : jsroute;
	},
	getUserInfo(){
		return PRIVATECONFIG.USERINFO;
	},
	setUserInfo(obj:Object){
		PRIVATECONFIG.USERINFO = obj;
	}
}
const PRIVATECONFIG = {
	ip:"http://11.177.15.104:8080/cloudmanager/",
	//ip:"http://11.177.50.51:8080/cloudmanager/",//jf
	//ip:"http://11.177.50.66:8080/cloudmanager/",//zx
	//ip:"http://11.177.50.73:8080/cloudmanager/",//wjy
	//ip:"http://11.177.50.64:9999/cloudmanager/",//yh
	USERINFO:{}
}