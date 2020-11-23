import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { NIFTYLIST1, NIFTYLIST2, NIFTYLIST3 } from './intraday.const';

@Component({
  selector: 'app-intraday',
  templateUrl: './intraday.component.html',
  styleUrls: ['./intraday.component.css'],
  providers: [DatePipe]
})
export class IntradayComponent implements OnInit {

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
    this.commonFunction(NIFTYLIST1);
    this.commonFunction(NIFTYLIST2);
    this.commonFunction(NIFTYLIST3);
    this.loading = false;
  }

  commonFunction(val): void {
    this.loading = true;
    this.api.IntradayGet({list : val}).subscribe(data => {
      console.log(data);
      if (data.stocks.length === 0) {
        this.stocklist = ['Data not Available'];
      }
      else {
        data.stocks.forEach(element => {
          this.stocklist.push(element);
        });
      }
    });
  }

}
