import { Component, ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router }   from '@angular/router';
import { TypeaheadModule } from 'ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
@Component({
	selector: 'coin-gold-detail',
	templateUrl: './coin-gold-detail.component.html',
	styleUrls: ['./coin-gold-detail.component.css']

})
export class CoinGoldDetailComponent {

}