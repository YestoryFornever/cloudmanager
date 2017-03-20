import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { IndexComponent } from './subs/index/index.component';
import { SnsShareManagementModule} from './subs/content/sns/sns-share-management/sns-share-management.module'
import { SnsNewsFlashManagementModule} from './subs/content/sns/sns-news-flash-management/sns-news-flash-management.module'
import { SnsNewsManagementModule } from './subs/content/sns/sns-news-management/sns-news-mangement.module';
import { SnsSourceManagementModule } from './subs/content/sns/sns-source-management/sns-source-management.module'
import { GroupManagementModule } from './subs/content/group/group-management/group-management.module'
import { UserEditModule } from './subs/auth/user/user-edit/user-edit.module';

import { UserBackModule } from './subs/auth/user/user-back/user-back.module';
import { UserLogComponent } from './subs/auth/user/user-log/user-log.component';
import { UserRelationComponentModule } from './subs/auth/user/user-relation/user-relation.component.module'
import { UserRelationComponent } from './subs/auth/user/user-relation/user-relation.component'
import { InvoiceManagementComponent } from './subs/content/coin/invoice-management/invoice-management.component';
import { InvoiceManagementModule } from './subs/content/coin/invoice-management/invoice-management.module';
import { CoinCommodityExchangeAuditModule } from './subs/content/coin/coin-commodity-exchange-audit/coin-commodity-exchange-audit.module';
import { CoinGoldDetailModule } from './subs/content/coin/coin-gold-detail/coin-gold-detail.module';


import {CoinGiftManagementComponent} from './subs/content/coin/coin-gift-management/coin-gift-management.component';
import {CoinCommodityExchangeAuditComponent} from './subs/content/coin/coin-commodity-exchange-audit/coin-commodity-exchange-audit.component';
import {CoinGoldDetailComponent} from './subs/content/coin/coin-gold-detail/coin-gold-detail.component';
import {CoinGoldStatisticsComponent} from './subs/content/coin/coin-gold-statistics/coin-gold-statistics.component';
import {CoinShufflingFigureManagementComponent} from './subs/content/coin/coin-shuffling-figure-management/coin-shuffling-figure-management.component';
import {CoinStoresGoodsManagementComponent} from './subs/content/coin/coin-stores-goods-management/coin-stores-goods-management.component';
import {UserRechargeLogComponent} from './subs/content/coin/user-recharge-log/user-recharge-log.component';


import { HomepageComponent } from '../homepage/homepage.component';
import { NavDynamicComponent } from './subs/frame/nav-dynamic/nav-dynamic.component';
import { NavMapComponent } from './subs/frame/nav-map/nav-map.component';
import { UserListComponent } from './subs/auth/user/user-list/user-list.component';
import { UserApproveComponent } from './subs/auth/user/user-approve/user-approve.component';
import { UserApproveHistoryComponent } from './subs/auth/user/user-approve-history/user-approve-history.component';
import { OrganizationStatisticsComponent } from './subs/auth/organization/organization-statistics/organization-statistics.component'
import { UserAdministrateComponent } from './subs/auth/user/user-administrate/user-administrate.component';
import { OrganizationListComponent } from './subs/auth/organization/organization-list/organization-list.component';
import { AuthDataItemComponent } from './subs/auth/authsetting/auth-data-item/auth-data-item.component';
import { AuthMenuBtnSettingComponent } from './subs/auth/authsetting/auth-menu-btn-setting/auth-menu-btn-setting.component';
import { AuthRoleManageModule } from './subs/auth/authsetting/auth-role-manage/auth-role-manage.module';
import { AuthUserGroupComponent } from './subs/auth/authsetting/auth-user-group/auth-user-group.component';
import { PermissionGroupComponent } from './subs/auth/authsetting/permission-group/permission-group.component';
import { SnsTagsManagementComponent} from './subs/content/sns/sns-tags-management/sns-tags-management.component';
import { SnsCommentsHistoryComponent} from './subs/content/sns/sns-comments-history/sns-comments-history.component';
import { SnsPicsManagementComponent} from './subs/content/sns/sns-pics-management/sns-pics-management.component';
import { SnsStatisticsComponent } from './subs/content/sns/sns-statistics-management/sns-statistics-management.component'

import { GroupManagementComponent} from './subs/content/group/group-management/group-management.component';

import { UserVipComponent } from './subs/auth/user/user-vip/user-vip.component';
import { UserInfoComponent} from './subs/system/user-info/user-info.component';

import { VersionManagementComponent} from './subs/system/version-management/version-management.component';
import { ParameterSetComponent} from './subs/system/apply-set/parameter-set/parameter-set.component';
import { LookQuotationComponent} from './subs/system/quotation-transaction/quotation/quotation.component';
import { CustomerHangComponent} from './subs/system/quotation-transaction/customerhang/customerhang.component';

import { BadListComponent} from './subs/content/vchart/bad-list/bad-list.component'
import { AwardManagementComponent} from './subs/content/vchart/award-managerment/award-managerment.component'
import { BannerManagementComponent} from './subs/content/vchart/banner-management/banner-management.component'
import { UserManagementComponent} from './subs/content/vchart/user-management/user-management.component'
import { UserFormComponentModule } from './subs/auth/user/user-form/user-form.component.module';
import { UserFormComponent } from './subs/auth/user/user-form/user-form.component';
import { CustomerManageModule } from './subs/auth/customer/customer-manage/customer-manage.module';
import { ActionManageModule } from './subs/auth/customer/action-manage/action-manage.module';
import { ContactManageModule } from './subs/auth/customer/contact-manage/contact-manage.module';
import { EventFollowComponent } from './subs/event/event-management/event-follow/event-follow.component';

import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,DropdownModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule,TooltipModule  } from 'ng2-bootstrap';
import { CalendarModule,PickListModule, TreeModule,TreeNode,AutoCompleteModule} from 'primeng/primeng';

import { TfPipe } from '../../pipes/tf.pipes';
import { NumAddCommaPipe } from '../../pipes/numAddComma.pipes';
import { Status3Pipe } from '../../pipes/status3.pipes';

import { Ng2Echarts } from 'ng2-echarts';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		UserEditModule,
		AuthRoleManageModule,
		RouterModule,
		GroupManagementModule,
		UserFormComponentModule,
		InvoiceManagementModule,
		CoinCommodityExchangeAuditModule,
		CoinGoldDetailModule,
		UserBackModule,
		UserRelationComponentModule,
		ActionManageModule,
		ContactManageModule,
		CustomerManageModule,
		SnsNewsFlashManagementModule,
		SnsShareManagementModule,
		SnsSourceManagementModule,
		SnsNewsManagementModule,
		AlertModule.forRoot(),CarouselModule.forRoot(),DatepickerModule.forRoot(),ButtonsModule.forRoot(),CollapseModule.forRoot(),DropdownModule.forRoot(),RatingModule.forRoot(),TypeaheadModule.forRoot(),PaginationModule.forRoot(),ModalModule.forRoot(),TabsModule.forRoot(),TooltipModule.forRoot(),
		CalendarModule,PickListModule,TreeModule,AutoCompleteModule
	],
	declarations: [
		IndexComponent,
		HomepageComponent,
		NavDynamicComponent,
		NavMapComponent,
		UserListComponent,
		UserApproveComponent,
		UserApproveHistoryComponent,
		OrganizationListComponent,
		OrganizationStatisticsComponent,
		AuthDataItemComponent,
		AuthMenuBtnSettingComponent,
		AuthUserGroupComponent,
		SnsTagsManagementComponent,	
		SnsStatisticsComponent,	
		VersionManagementComponent,
		PermissionGroupComponent,
		LookQuotationComponent,
		CustomerHangComponent,

		UserAdministrateComponent,
		UserInfoComponent,
		ParameterSetComponent,	
		SnsCommentsHistoryComponent,
		UserLogComponent,
		UserVipComponent,
		UserFormComponent,
		UserRelationComponent,
		
		BadListComponent,
		BannerManagementComponent,
		AwardManagementComponent,
		UserManagementComponent,

		CoinGiftManagementComponent,
		CoinCommodityExchangeAuditComponent,
		CoinGoldDetailComponent,
		CoinGoldStatisticsComponent,
		CoinShufflingFigureManagementComponent,
		CoinStoresGoodsManagementComponent,
		UserRechargeLogComponent,
		InvoiceManagementComponent,
	
		SnsPicsManagementComponent,

		EventFollowComponent,

		NumAddCommaPipe,
		TfPipe,
		Status3Pipe,

		Ng2Echarts
	]
})
export class HomepageModule { }