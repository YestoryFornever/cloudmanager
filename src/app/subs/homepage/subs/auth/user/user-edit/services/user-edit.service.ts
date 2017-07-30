import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { User }           from '../classes/user-edit';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UserEditService {
	private IP:string = GLOBAL.INCONFIG.getIP();
	private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
	private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
	private ExtractData = GLOBAL.INCONFIG.extractData();
	private ExtractResult = GLOBAL.INCONFIG.extractResult();
	private HandleError = GLOBAL.INCONFIG.handleError();

	constructor (private http: Http) {}

	getUser (id:any): Observable<any> {
		console.log("id:="+id);
		let url = this.IP+'back/authority/getUserDetail';
		let body = JSON.stringify({
			'userId':""+id
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}

	addUser(user:User): Observable<any> {
		// debugger;
		//http://stackoverflow.com/questions/37174759/how-do-you-post-a-formdata-object-in-angular-2
		var formdata = new FormData();
		formdata.append('loginName',user.phone);
		formdata.append('headPicture',user.head_thumbnail);
		formdata.append('userName',user.name);
		formdata.append('organizationName',user.company);
		formdata.append('departmentName',user.department);
		formdata.append('position',user.position);
		formdata.append('contactPhone',user.contact);
		formdata.append('workPhone',user.work_contact);
		formdata.append('companyMail',user.mail);
		formdata.append('workAddress',user.work_address);
		formdata.append('nickName',user.nickname);
		formdata.append('gender',user.sex);
		// user.birthday && (formdata.append('birthday',(user.birthday).getTime()));
		formdata.append('hometown',user.home_address);
		formdata.append('qqId',user.qq_num);
		formdata.append('weChatId',user.wechat_num);
		formdata.append('referralCode',user.referrerid);
		formdata.append('bCardPicture',user.name_card);
		formdata.append('userStatus',user.userStatus);//待删除
		formdata.append('realNameAStatus',user.approveStatus);//待删除
		formdata.append('mailAStatus',user.mailModel);
		formdata.append('visitStatus',user.visitModel);
		formdata.append('userRemark',user.backup);
		let options = new RequestOptions({ headers: this.FDH });
		let url = this.IP+'authority/register/registerUser';
		return this.http.post(url, formdata, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}

	editUser(user:User): Observable<any> {
		// debugger;
		var formdata = new FormData();
		formdata.append('userId',user.id);
		formdata.append('loginName',user.phone);
		formdata.append('headPicture',user.head_thumbnail);
		formdata.append('userName',user.name);
		formdata.append('organizationName',user.company);
		formdata.append('departmentName',user.department);
		formdata.append('position',user.position);
		formdata.append('contactPhone',user.contact);
		formdata.append('workPhone',user.work_contact);
		formdata.append('companyMail',user.mail);
		formdata.append('workAddress',user.work_address);
		formdata.append('nickName',user.nickname);
		formdata.append('gender',user.sex);
		// user.birthday && (formdata.append('birthday',(user.birthday).getTime()));
		formdata.append('hometown',user.home_address);
		formdata.append('qqId',user.qq_num);
		formdata.append('weChatId',user.wechat_num);
		formdata.append('referralUserId',user.referrerid);
		formdata.append('bCardPicture',user.name_card);
		formdata.append('userStatus',user.userStatus);//待删除
		formdata.append('realCertifyStatus',user.approveStatus);//待删除
		formdata.append('emailCertifyStatus',user.mailModel);
		formdata.append('visitStatus',user.visitModel);//待删除
		formdata.append('userRemark',user.backup);
		let options = new RequestOptions({ headers: this.FDH });
		let url = this.IP+ 'authority/register/updateRegisterUser';
		return this.http.post(url, formdata, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}

	resetPassword(userId:string){
		let url = this.IP+'authority/register/resetLoginPassword';
		let body = JSON.stringify({
			'userId':userId
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}

	getOrgs(): Observable<any[]> {
		let url = this.IP+'back/authority/getOrganizationList';
		let body = JSON.stringify(null);
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}

	getDeps(): Observable<any[]> {
		let url = this.IP+'back/authority/getDepartmentList';
		let body = JSON.stringify(null);
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}

	getReferrer(phonenum:string){
		let url = this.IP+'authority/register/getRecommendedAccountID';
		let body = JSON.stringify({
			'loginName':phonenum
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractData)
						.catch(this.HandleError);
	}
	
	checkAccont(phone:string){
		let url = this.IP+'authority/register/getRegisterAccount';
		let body = JSON.stringify({
			'loginName':phone
		});
		let options = new RequestOptions({ headers: this.JH });
		return this.http.post(url, body, options)
						.map(this.ExtractResult)
						.catch(this.HandleError);
	}
}