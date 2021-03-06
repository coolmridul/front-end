import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../../app/shared-service.service';
import { NIFTYLIST2 } from '../intraday/intraday.const';

@Component({
  selector: 'app-earning',
  templateUrl: './earning.component.html',
  styleUrls: ['./earning.component.css'],
  providers: [DatePipe]
})
export class EarningComponent implements OnInit {

  tday;
  stocklist = [];
  myDate = new Date();
  constructor(private datePipe: DatePipe, private api: SharedServiceService) {
    this.tday = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.listofstocks();
  }

  listofstocks(): void {
    this.stocklist = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < NIFTYLIST2.length; i++) {
      setTimeout (() => {
        this.commonFunction(NIFTYLIST2[i]);
     }, 2000);
    }
  }

  commonFunction(val): void {
    this.api.EarningPost({ list: val }).subscribe(data => {

      if (data.pv !== 'NA') {
          this.stocklist.push(data);
        }
    });
  }

  abc() {
    this.api.DownloadFile(this.stocklist, 'Earnings');
  }

}
