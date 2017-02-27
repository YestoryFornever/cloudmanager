import { Component, ChangeDetectorRef,ViewChild,OnInit,trigger,state,style,transition,animate } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
// import { TypeaheadModule } from 'ng2-bootstrap';
// import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
// import { TypeaheadModule } from 'ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
import { LookQuotationService } from './services/quotation.service';
import {CalendarModule,PickListModule} from 'primeng/primeng';
import { AlertModule,CarouselModule,DatepickerModule,ButtonsModule,CollapseModule,RatingModule,TypeaheadModule,PaginationModule,ModalModule,TabsModule  } from 'ng2-bootstrap';

import { lookQuotation } from './classes/quotation';
@Component({
	selector: 'quotation',
	templateUrl: './quotation.component.html',
	styleUrls: [
		'./quotation.component.css',
		'../../../../css/header.css',
		'../../../../css/table.css',
		'../../../../css/condition.css',
		'../../../../css/pagination.css'


	],
	providers: [LookQuotationService]
})
export class LookQuotationComponent implements OnInit{ 
    errorMsg:string;
    order:lookQuotation;
    // orders:Order[];
    // condition:OrderCondition;
	constructor(
		private changeDetectorRef:ChangeDetectorRef,
		private LookQuotationService:LookQuotationService
	){
        this.order = new lookQuotation();
        // this.condition = new OrderCondition();
	}
	aaa:any =false;
	ngOnInit(){
		this.getBondLists();
        this.search();
        // this.changed(this.date);
		this.mon = {
            firstDayOfWeek: 0,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
            monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
            monthNamesShort: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ]
        };
	};
	 mon:any={
        monthNames:[]
    };

	// search:any={
	// 	pageSize:"10",
	// }

// **********************
// obj1:any=this.condition.organizationType;

// 剩余期限

changeStatus2(obj:any){
    // this.rsdtrm.all = false;
        obj.a=false;

    }
changeStatus2All(obj:any){
    // debugger;
    for(var i in obj){
        obj[i]=false;
        if(i=="a"){
            obj[i]=true;
        }
    }

 // this.rsdtrm={
 //        // 剩余期限
 //        "all":true,
 //        "c001":false,
 //        "c002":false,
 //        "c003":false,
 //        "c004":false,
 //        "c005":false,
 //        "c006":false,
 //        "c007":false,
 //        "c008":false,
 //        "c009":false,
 //    };
    }

// 报价状态

date:any=new Date();
myStartTime:any=this.date;
myEndTime:any=this.date
// 默认日期
// myStartTime:any=this.changeGet();
 // myEndTime:any=this.changeGet();
 // changed(str:any){
 //     var str0=str.toLocaleString();
 //     var str1=str.toLocaleTimeString();
 //     str=str.replace('str1'," ");
 //     var arr=str.split();
 //     str=arr.join("-")
 //     console.log(str);
 // }
// str="Fri Feb 17 2017 11:06:53 GMT+0800 (中国标准时间)";
get(str:any){
    var str1:any;
     str1=str.replace('(中国标准时间)',"");
       var data=new Date(str1);
       var y=data.getFullYear();
        var m=data.getMonth()+1;
        var  d=data.getDate();
        var t:any;
        var s:any;
        if(m<=9){
            t='0'+m;
        }else{
          t=m+'';
        }
        if(d<10){
            s='0'+d;
        }else {
            s=d+'';
        } 
    //     return y+"-"+m+"-"+d
    var str2 = y+"-"+t+"-"+s ;
    return str2

 }
// changeGet(){
  
//         var date=new Date();
//         var y=date.getFullYear()+'';
//         var m=date.getMonth()+1+'';
//         var  d=date.getDate()+'';
//         if(m<='9'){
//             m='0'+m;
//         }
//         if(d<='09'){
//             d='0'+d;
//         }else{
//             d=d;
     
//     }
//     return y+"-"+m+"-"+d;
// }

// 单选
defaultFn(){
    this.default.drc = "" ;
}


// 查询报价列表
default:any={
organizationType:"",
organizationId:"",
// organizationFullName:"",
userName:"",
loginName:"",
bondTp:"",
rsdtrm:"",
bondid:"",
ofrEStatus:"",
drc:"",
bondOfrDayStar:"",
bondOfrDayEnd:"",
gpType:"",
order:"9",
desc:"2",
bondShtrm:"",
bondCd:"",
pageSize:"20",
pageNum:'1'
}

 organizationFullName:any; 
bondName:any
data:any;
message:any={
  bondSize:''
};
num:any;
orc:any=[];//机构名、机构ID
orgArr :any =[];//机构类型
bondType:any=[];//债券类型
lastTime:any=[];//剩余期限
bondState:any=[];//报价状态
hangStype:any=[];//挂牌类型
  getBondLists(){
      console.log(this.myStartTime);

     this.default.bondOfrDayStar=this.get(this.myStartTime+'');
     this.default.bondOfrDayEnd=this.get(this.myEndTime+'');
      // this.default.bondOfrDayStar=this.changeGet(this.myStartTime);
      // this.default.bondOfrDayEnd=this.changeGet( this.myEndTime);
//债券类型

        this.bondType = [];
        this.default.bondTp=this.func(this.checkModel, this.bondType);
        // for (var i in this.checkModel) {
        //     if(this.checkModel[i] == true){
        //         this.bondType.push( i.substring(1) );
        //         this.default.bondTp = this.bondType.join(",");
        //     }
        // }
//机构类型
        this.orgArr = [];
        this.default.organizationType=this.func(this.organizationType, this.orgArr);
     
//剩余期限
        this.lastTime = [];
        this.default.rsdtrm=this.func(this.rsdtrm, this.lastTime);
// 挂牌类型
         this.hangStype = [];
        this.default.gpType=this.func(this.gpType, this.hangStype);
// 报价状态
        this.bondState = [];
        this.default.ofrEStatus=this.func(this.ofrEStatus, this.bondState);
   // 升降序
   this.default.desc=this.descs;
       console.log(this.default);
      this.LookQuotationService
      .getBondList(this.default)
      .subscribe(
          result=>{
             if(result.status==0){

                 this.data=result.data.bondInfList; 
                  // this.totalItems=result.data.page.totalResult;
                 this.message=result.data;

                 console.log(result);
                 console.log( this.data);
                 //机构名、机构ID
                  for(let i in this.data){
                  var  obj = {name:this.data[i].organizationFullName,
                                 id:this.data[i].organizationId
                                  };
                    
                       this.orc.push(obj)
                      
                }
                 console.log( this.orc);
                 // 数量
                for(let i in this.data){
                  this.data[i].num=parseFloat(this.data[i].num)/10000;
                }
                 // 收益率
                 for(let i in this.data){
                  this.data[i].yldrto=parseFloat(this.data[i].yldrto)*100;
                }
                // 净价
                for(let i in this.data){
                  this.data[i].netprc=parseFloat(this.data[i].netprc);
                }
                // 亿元
                  this.num=parseFloat(this.message.bondNum)/100000000;
                  // console.log( this.num);
                  // console.log(this.message['bondSize']);
                 // console.log(this.data);

                 for(let i in this.data){
                     if(this.data[i].drc==1){
                         this.data[i].drc="卖出"
                     }else if(this.data[i].drc==-1){
                          this.data[i].drc="买入"
                     }
                 }
                 // 报价状态
                   for(let i in this.data){
                    if(this.data[i].ofrEStatus==1){
                        this.data[i].ofrEStatus="有效"
                    }else if(this.data[i].ofrEStatus==2){
                        this.data[i].ofrEStatus="成交"
                    }else if(this.data[i].ofrEStatus==3){
                        this.data[i].ofrEStatus="撤销"
                    }
                }


                 // 挂牌类型
                for(let i in this.data){
                    if(this.data[i].gpType==1){
                        this.data[i].gpType="挂牌"
                    }else if(this.data[i].gpType==2){
                        this.data[i].gpType="发送"
                    }else if(this.data[i].gpType==3){
                        this.data[i].gpType="代挂"
                    }
                }
                
             }  

          }
          )
    }
 func(obj:any,arr:any){
     this.checkedAll(obj);
     var str:any;
     for (var i in obj) {
           if(obj[i] == true){
                  if(arr.indexOf(obj[i])==-1){
                       arr.push( i.substring(1) );
                       }
                        
                        str = arr.join(",");
                    }
                }
      return str;
    }




    // 代码或简称搜索
       aa:any ={
         keyword:''
       }
   
    filteredSingle:any;
    array1:any=[];

    search(){
      this.array1=[];
        console.log(this.aa);
         this.LookQuotationService
          .searchBond(this.aa)
          .subscribe(
              result=>{

                this.filteredSingle=result.data;
                console.log(this.filteredSingle);
                for (let i in  this.filteredSingle){
                     
                     var  obj = {name:this.filteredSingle[i].bondCd+'/'+this.filteredSingle[i].bondShrtnm,
                                 id:this.filteredSingle[i].bondid
                                  };
                    
                       this.array1.push(obj)
                   }
              // //   for (var i in  this.filteredSingle){
              // //     this.array1.push( this.filteredSingle[i].bondCd)
              // //   }
                console.log( this.array1);
              }
              )
    }
 // 查询债券类型多选
organizationType={
            // 机构类型
        "a":true,
        "a1":false, 
        "a2":false, 
        "a3":false,
        "a5":false,
        "a6":false,
        "a7":false,
        "a8":false,
        "a4":false,
        "a11":false,
        "a13":false,
    };



public checkModel={
        // 债券类型
        "a":true,
        "b1":false,
        "b2":false,
        "b3":false,
        "b4":false,
        "b5":false,
        "b6":false,
        "b7":false,
        "b8":false,
        "b9":false,
        "b10":false,
    };
   rsdtrm={
        // 剩余期限
        "a":true,
        "c1":false,
        "c2":false,
        "c3":false,
        "c4":false,
        "c5":false,
        "c6":false,
        "c7":false,
        "c8":false,
        "c9":false,
    };
   gpType={
        // 挂牌类型
        "a":true,
        "f1":false,
        "f2":false,
        "f3":false,
    };
    ofrEStatus={
         // 报价状态
        "a":true,
        "d1":false,
        "d2":false,
        "d3":false,
    };

   checkedAll(obj:any){
       obj["a"]==false;
    }

   






 hideList:any =  true
 setListClasses() {
              let classes =  {
            hide: this.hideList,      // true
            // show: !this.show, // false
      };
      return classes;
    }

//即时搜索
  public stateCtrl:FormControl = new FormControl();
  public myForm:FormGroup = new FormGroup({
    state: this.stateCtrl
  });
  public customSelected:string = '';
  public dataSource:Observable<any>;
  public asyncSelected:string = '';
  public typeaheadLoading:boolean = true;
  public typeaheadNoResults:boolean = true; 
  // companylist:any=[{organizationShortName:"亚联",organizationId:1}];
  partlist:any=[];
// 筛选条件  
  public typeaheadOnCompanys(e:TypeaheadMatch):void{
    console.log(e)
     this.default.bondid = e.item.id;//id 赋值给隐藏的input。获取公司id 
  }
  public typeaheadOnDepartments(e:TypeaheadMatch):void{   
      // this.default.departmentId = e.item.departmentId;
  } 
  // 机构名、机构ID
   public typeaheadOnSelects(e:TypeaheadMatch):void{
    console.log(e)
     this.default.organizationId = e.item.id;//id 赋值给隐藏的input。获取公司id 
  }
   
// 升降序
descs:any='2';
  orderSelect(){
    if(this.descs=='1'){
      this.descs='2';
    }else if(this.descs=='2'){
       this.descs='1';
    }
  }














	// 分页
height:any;
 msgNumbers = [{Number:'20'},{Number:'30'},{Number:'50'}];
    public firstText:string = '首页';
    public lastText:string = '末页';
    public previousText:string = '<';
    public nextText:string = '>';
    public maxSize:number = 5;
    public totalItems:number;
    public itemsPerPage:number = 20;
    public currentPage:number=1;
    public totalPages:number;
    public turnFirst(){
        this.currentPage = 1;//无法同时修改当前页和每页总数
        this.changeDetectorRef.detectChanges();
        this.getBondLists();  
    }
    public sizeData(Number:any){
    	this.itemsPerPage = Number;
        this.height = this.itemsPerPage*38+38+'px';
        this.currentPage = 1;//无法同时修改当前页和每页总数
        this.changeDetectorRef.detectChanges();
       
        	
       
        
        this.turnFirst()
        this.height = this.itemsPerPage*38+120+'px';
        var listBody:any = document.getElementById("listBody");     
        var tr:any = document.createElement('tbody');
        var num:number = this.itemsPerPage*1;  
    };
    
    public pageNumChange(event:any,allcheck:any){
        // this.changeDetectorRef.detectChanges();
        
        this.default.pageSize = this.itemsPerPage+'';
        // this.getUserBackList();
        this.totalPages = event;
    }
    public setPage(pageNo:number):void {
        // this.getUserBackList();
        this.currentPage = pageNo;
    };
// 翻页
    pageChanged(event:any,allcheck:any):void {
        this.default.pageNum = event.page;
         this.getBondLists();
        // this.onSearch();
    };

}