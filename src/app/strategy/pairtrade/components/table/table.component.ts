import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from '../../../../shared-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() childMessage: string;

  datapresent: boolean = false;
  page = 1;
  pageSize = 10;
  collectionSize;
  countries: Array<any> = [];

  init: 'NIFTYBANK';

  constructor(private apiservice: SharedServiceService) {
    // this.refreshCountries(this.init);
  }

  ngOnInit(): void {

    this.refreshCountries(this.childMessage);
  }

  refreshCountries(val?): void {

    this.apiservice.PairTradeGet().subscribe(dataa => {

      const arr: Array<any> = [];
      dataa.forEach(element => {
        if (element.sector === val) {
          arr.push(element);
        }
      });
      console.log(arr)
      this.collectionSize = arr.length;
      this.countries = arr.map((country, i) => 
      ({ id: i + 1, ...country })).slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

      if (this.countries.length !== 0) {
        this.datapresent = true;
      }
    });
  }
}
