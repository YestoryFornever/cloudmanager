import { Component,ElementRef, ViewChild,OnInit,AfterViewInit,OnDestroy,ChangeDetectorRef,trigger,state,style,transition,animate,AfterViewChecked } from '@angular/core';
import {NgStyle} from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { TypeaheadModule } from 'ng2-bootstrap';
import { TypeaheadMatch } from 'ng2-bootstrap/typeahead';
import { SnsManagementService }  from './../sns-management-services/sns-management.services';
import { ActivatedRoute, Router }   from '@angular/router';
import { Message,UIChart} from 'primeng/primeng';
import * as Highcharts from 'highcharts' 

// import { CHART_DIRECTIVES } from '../../../../../../../../node_modules/chart.js/dist/Chart.min.js';
import GLOBAL = require('../../../../../../../../public/in.config');
@Component({
	selector: 'sns-statistics-management',
	templateUrl: './sns-statistics-management.component.html',
	styleUrls: ['./sns-statistics-management.component.css'],
	providers: [SnsManagementService]
})
export class SnsStatisticsComponent implements AfterViewInit, OnDestroy{ 
	@ViewChild('chart') public chartEl: ElementRef;  //highcharts
     private _chart: any; //highcharts
     public ngAfterViewInit() {
    let opts: any = {
        title: {
            text: 'High-charts',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [
        {
            name: '北京',
            data: [
                7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 23.3, 18.3, 26.5, 11.3,
            ]
        },
        {
            name: '上海',
            data: [
                5.0, 6.9, 1.5, 14.5, 18.2, 21.5, 25.2,
                26.5, 11.3, 25.3, 127.9, 10.6
            ]
        },
         {
            name: '广州',
            data: [
                9.0, 61.9, 7.5, 114.5, 18.2, 11.5, 25.2,
                26.5, 11.3, 25.3, 117.9, 10.6
            ]
        }
        ]
    };
    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'line',
            renderTo: this.chartEl.nativeElement
         };
        this._chart = new Highcharts.Chart(opts);
    }
  }
  public ngOnDestroy() {
    this._chart.destroy();
  }

// Echart
// countView
public chartData = {
    theme: '',
    event: [
      {
        type: "click",
        cb: function (res:any) {
          console.log(res);
        }
      }
    ],
    title: {
      text: 'E-chart',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      startAngle: -180,
      radius: '55%',
      center: ['50%', '60%'],
      data: [{
        value: 335,
        name: '直接访问'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 234,
        name: '联盟广告'
      }, {
        value: 135,
        name: '视频广告'
      }, {
        value: 1548,
        name: '搜索引擎'
      }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };
}