import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { NIFTYLIST1 } from '../intraday/intraday.const';

@Component({
  selector: 'app-bearish',
  templateUrl: './bearish.component.html',
  styleUrls: ['./bearish.component.css'],
  providers: [DatePipe]
})
export class BearishComponent implements OnInit {

  tday;
  stocklist = [];
  loading = false;
  myDate = new Date();
  constructor(private datePipe: DatePipe, private api: SharedServiceService) {
    this.tday = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.stocklist = [];
    this.listofstocks();
  }

  listofstocks(): void {
    this.stocklist = [];
    for (let i = 0; i <= NIFTYLIST1.length; i++) {
      this.commonFunction(NIFTYLIST1[i]);
    }
    this.loading = false;
  }

  commonFunction(val): void {
    this.loading = true;
    this.api.BearishGet({ list: val }).subscribe(data => {
      if (data.open !== 'NA') {
        this.stocklist.push(data);
      }
    });
  }

  abc() {
    this.api.DownloadFile(this.stocklist, 'IntraDay');
  }

}
