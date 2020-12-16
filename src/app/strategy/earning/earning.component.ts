import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../../app/shared-service.service';
import { NIFTYLIST1 } from '../intraday/intraday.const';

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
    this.stocklist = [];
    this.listofstocks();
  }

  listofstocks(): void {
    this.stocklist = [];
    for (let i = 0; i <= NIFTYLIST1.length; i++) {
      this.commonFunction(NIFTYLIST1[i]);
    }
  }

  commonFunction(val): void {
    this.api.EarningPost({ list: val }).subscribe(data => {
        this.stocklist.push(data);
    });
  }

}
