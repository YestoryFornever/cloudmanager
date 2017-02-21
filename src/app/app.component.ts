import { Component,ViewContainerRef } from '@angular/core';

@Component({
		selector: 'my-app',
		templateUrl: './app.component.html',
		styleUrls: ['./app.component.css']
})
export class AppComponent { 
	title="Hello from GSJ";
	private viewContainerRef: ViewContainerRef;

	public constructor(viewContainerRef:ViewContainerRef) {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
	}
}
