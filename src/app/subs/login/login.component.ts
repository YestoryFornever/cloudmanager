import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './services/login.services';
import { User } from './classes/login';
@Component({
	selector: 'alphain-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers:[LoginService]
})

export class LoginComponent implements OnInit { 
	errorMsg:string;
	users:User[];
	constructor( private router: Router,private loginService:LoginService){}
	ngOnInit() {
		this.getUser();	
	};
	getUser(){
		this.loginService.getUser()
						 .subscribe(
			user => this.users = user,
			error => this.errorMsg = <any>error,
		);
	}
	login(username:any,password:any){
	this.compareUsername(username,password)
	}
	compareUsername(username:any,password:any){
		var success=0;
		for(var i in this.users){
			if(username.value==this.users[i].username){
				success=1;
				this.comparePassword(i,password)
			}
		}
		if(success==0){
				alert('用户名不存在！')
			}
	}
	comparePassword(i:any,password:any){
		if(this.users[i].password == password.value){
			this.router.navigate(['/homepage']);
		}else{
			alert('密码不正确')
		}
	}
	missPassword(){
		alert("ctrl+a")
	}
}