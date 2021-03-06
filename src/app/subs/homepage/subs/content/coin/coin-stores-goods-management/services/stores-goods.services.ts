import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
 // import { GoodsList,GoodsInfo }       from '../classes/goods-list';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}

@Injectable()

export class StoresGoodsServices {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();//obj
    private extractData = GLOBAL.INCONFIG.extractData();//data 
    private HandleError = GLOBAL.INCONFIG.handleError();

 
 
     

    constructor (private http: Http) {}

/***********************上架商品页面*************/
    // 获取上架商品列表
    goodsOnlineList(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/goodsonline/list";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //下架商品
    goodsDownlineList(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/goodsonline/delete";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }

    // 商品名称和ID
    goodsNameList(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/goodsonline/goodsnamelist";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    // 添加上架商品
    goodsOnlineAdd(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/goodsonline/add";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //上架商品排序
    updateOrder(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/goodsonline/updatedisplayorder";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
   

}