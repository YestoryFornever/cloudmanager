import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ErrorService } from './services/error.services';
import { Error } from './classes/error';
@Component({
	selector: 'alphain-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.css'],
	providers:[ErrorService]
})

export class ErrorComponent implements OnInit { 
	errorMsg:string;
	constructor(
		private router: Router,
		private errorService:ErrorService
	){}
	ngOnInit() {
	}
	homepage(){
		this.router.navigateByUrl('homepage');
	}
}