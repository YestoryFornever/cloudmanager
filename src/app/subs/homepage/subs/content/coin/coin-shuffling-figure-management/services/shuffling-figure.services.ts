import GLOBAL = require('../../../../../../../../../public/in.config');
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
 // import { GoodsList,GoodsInfo }       from '../classes/goods-list';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
// import {}

@Injectable()

export class ShufflingFigureServices {
    private IP:string = GLOBAL.INCONFIG.getIP();
    private JH:Headers = GLOBAL.INCONFIG.JsonHeaders;
    private FDH:Headers = GLOBAL.INCONFIG.FormDataHeaders;
    private ExtractResult = GLOBAL.INCONFIG.extractResult();//obj
    private extractData = GLOBAL.INCONFIG.extractData();//data 
    private HandleError = GLOBAL.INCONFIG.handleError();
 
    constructor (private http: Http) {}

 
    /*************轮播图管理********/
    //轮播图
    configImageList(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/configimage/list";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //轮播图开关
    configOnOff(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/configimage/switch";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //轮播图排序
    configImageSort(obj:Object):Observable<any>{
        let url = this.IP+"goldcoin/configimage/sort";
        let ser = JSON.stringify(obj);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, ser, options)
                        .map(this.ExtractResult)
                        .catch(this.HandleError);
    }
    //轮播图  添加
    configImageAdd(obj:Object,configImagePicture:any):Observable<any>{
        let ser = JSON.stringify(obj);
        // debugger;
        let url = this.IP+'goldcoin/configimage/add';
        var fd = new FormData();
        fd.append('configImageInfo',ser);
        fd.append('configImagePicture',configImagePicture);
        let options = new RequestOptions({ headers: this.FDH });
        return this.http
            .post(url, fd, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }
    //轮播图  修改
    configImageUpdate(obj:Object,configImagePicture:any):Observable<any>{
        let ser = JSON.stringify(obj);
        // debugger;
        let url = this.IP+'goldcoin/configimage/update';
        var fd = new FormData();
        fd.append('configImageInfo',ser);
        fd.append('configImagePicture',configImagePicture);
        let options = new RequestOptions({ headers: this.FDH });
        return this.http
            .post(url, fd, options)
            .map(this.ExtractResult)
            .catch(this.HandleError);
    }

}