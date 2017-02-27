import { Component, ViewChild,OnInit,trigger,state,style,transition,animate,ChangeDetectionStrategy } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypeaheadModule,TabsModule } from 'ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';

@Component({
	selector: 'sns-share-add',
	templateUrl: './sns-share-add.component.html',
	styleUrls: ['./sns-share-add.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnsShareAddComponent implements OnInit{
	ngOnInit(){
	// this.getHeroes();
	};

}