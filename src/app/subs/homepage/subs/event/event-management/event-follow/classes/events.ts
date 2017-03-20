export class EventClass{
	constructor(){
		this.id='';
		this.fullname='';
		this.abbreviation='';
		this.c1='';
		this.c1id='';
		this.c2='';
		this.c2id='';
		this.address='';
		this.address_detail='';
		this.address_code='';
		this.phone='';
		this.isFinancial='1';
		this.isBonds = '1';
		this.backup='';
		this.subsNum='';
		this.population='';
		this.source='';
		this.approveStatus='';
		this.createTime='';
		this.updateTime='';
		this.enterpriseNature = '';
		this.enterpriseNatureName = '';
		this.issuerShortName = '';
		this.issuerId = '';
		this.province = '';
		this.city = '';
		this.ic1 = '';
		this.ic1id = '';
		this.ic2 = '';
		this.ic2id = '';
	}
	id:string;
	fullname:string;
	abbreviation:string;
	logo:any;
	logourl:any;
	c1:string;
	c1id:string;
	c2:string;
	c2id:string;
	address:string;
	address_detail:string;
	address_code:string;
	phone:string;
	isFinancial:string;
	isBonds:string;
	backup:string;
	subsNum:string;
	population:string;
	source:string;
	approveStatus:string;
	createTime:string;
	updateTime:string;
	enterpriseNature:string;
	enterpriseNatureName:string;
	issuerShortName:string;
	issuerId:string;
	province:string;
	city:string;
	ic1:string;
	ic1id:string;
	ic2:string;
	ic2id:string;
	reset(){
		this.id='';
		this.fullname='';
		this.abbreviation='';
		//this.logo='';
		this.c1='';
		this.c2='';
		this.address='';
		this.address_detail='';
		this.address_code='';
		this.phone='';
		this.isFinancial='1';
		this.isBonds = '1';
		this.backup='';
		this.subsNum='';
		this.population='';
		this.source='';
		this.approveStatus='';
		this.enterpriseNature = '';
		this.enterpriseNatureName = '';
		this.issuerShortName = '';
		this.issuerId = '';
		this.province = '';
		this.city = '';
		this.ic1 = '';
		this.ic1id = '';
		this.ic2 = '';
		this.ic2id = '';
	}
}