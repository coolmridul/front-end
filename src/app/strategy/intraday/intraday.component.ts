import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SharedServiceService } from '../../shared-service.service';


@Component({
  selector: 'app-intraday',
  templateUrl: './intraday.component.html',
  styleUrls: ['./intraday.component.css'],
  providers: [DatePipe]
})
export class IntradayComponent implements OnInit {

  tday;
  stocklist;
  loading = false;

  myDate = new Date();
  constructor(private datePipe: DatePipe, private api: SharedServiceService) {
    this.tday = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.listofstocks();
  }

  listofstocks() {
    this.loading = true;
    return this.api.IntradayGet().subscribe(data => {
      this.loading = false;
      if (data.stocks.length === 0) {
        this.stocklist = ['Data not Available'];
      }
      else {

        this.stocklist = data.stocks;
      }

    });
  }

}
