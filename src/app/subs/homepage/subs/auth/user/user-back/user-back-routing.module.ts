import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {UserBackComponent} from './user-back.component';
import {UserBackDetailComponent} from'./subs/user-back-detail/user-back-detail.component'
import {UserBackListComponent} from'./subs/user-back-list/user-back-list.component'

export const UserBackRouting: Routes =[{
	path: 'user-back',
	component: UserBackComponent,
	children:[
		{
			path:'',
			redirectTo: 'user-back-list', 
			pathMatch: 'full'
		},
		{
			path:'user-back-detail',
			component: UserBackDetailComponent
		},
		{
			path: 'user-back-detail/:backId/:userId',
			component: UserBackDetailComponent
		},
		{
			path:'user-back-list',
			component: UserBackListComponent
		}				
		
	]
}]



// export const UserBackRouting: Routes =[{
// 	path: 'sns-share-management',
// 	component: SnsShareManagementComponent,
// 	children:[
// 		{
// 			path:'',
// 			redirectTo: 'sns-share-list', 
// 			pathMatch: 'full'
// 		},
// 		{
// 			path:'sns-share-change',
// 			component: SnsShareDetailsComponent
// 		},
// 		{
// 			path:'sns-share-change/:id',
// 			component: SnsShareDetailsComponent
// 		},
// 		{
// 			path:'sns-share-list',
// 			component: SnsShareListComponent
// 		},
// 		{
// 			path:'sns-share-add',
// 			component: SnsShareAddComponent
// 		}					
		
// 	]
// }]

