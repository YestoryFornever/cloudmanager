import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Error }           from '../classes/error';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export class ErrorService {
	constructor (private http: Http) {};
}