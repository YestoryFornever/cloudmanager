目录结构以组件为原子进行划分
组件结构如下：
[components]
-[directives]
-[pipes]
-[services]
-[subs]
-[images]
-component.ts
-component.css
-component.html
-component.module.ts
-component.routing.ts

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdSlideToggleModule } from '@angular2-material/slide-toggle';
import { MdSliderModule } from '@angular2-material/slider';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdTooltipModule } from '@angular2-material/tooltip';
//import {  } from '@angular2-material/';

@NgModule({
	imports: [
		MdButtonModule.forRoot(),
		MdButtonToggleModule.forRoot(),
		MdCardModule.forRoot(),
		MdCheckboxModule.forRoot(),
		MdGridListModule.forRoot(),
		MdIconModule.forRoot(),
		MdInputModule.forRoot(),
		MdListModule.forRoot(),
		MdMenuModule.forRoot(),
		MdProgressBarModule.forRoot(),
		MdProgressCircleModule.forRoot(),
		MdRadioModule.forRoot(),
		MdSidenavModule.forRoot(),
		MdSlideToggleModule.forRoot(),
		MdSliderModule.forRoot(),
		MdTabsModule.forRoot(),
		MdToolbarModule.forRoot(),
		MdTooltipModule.forRoot(),
	],
	declarations: [
	]
})
export class Module { }
		