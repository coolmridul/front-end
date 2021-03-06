import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';
import { NiftyBank, NIFTPHARMA, NIFTYAUTO, NIFTYFMCG, NIFTYFS, NIFTYIT } from './constants';

@Component({
  selector: 'app-pairtrade',
  templateUrl: './pairtrade.component.html',
  styleUrls: ['./pairtrade.component.css']
})


export class PairtradeComponent implements OnInit {

  @ViewChild('name') abc;
  buttonDisabled: boolean;

  NIFTYBANK = 'NIFTYBANK';
  NIFTYAUTO = 'NIFTYAUTO';
  NIFTYFS = 'NIFTYFS';
  NIFTYFMCG = 'NIFTYFMCG';
  NIFTYIT = 'NIFTYIT';
  NIFTPHARMA = 'NIFTPHARMA';

  constructor(private apiservice: SharedServiceService) {
  }

  ngOnInit(): void {
    this.buttonDisabled = false;
  }

  // tslint:disable-next-line: typedef
  getresults() {
    this.commonfunction(NiftyBank, 'NIFTYBANK');
    this.commonfunction(NIFTYAUTO, 'NIFTYAUTO');
    this.commonfunction(NIFTYFS, 'NIFTYFS');
    this.commonfunction(NIFTYFMCG, 'NIFTYFMCG');
    this.commonfunction(NIFTYIT, 'NIFTYIT');
    this.commonfunction(NIFTPHARMA, 'NIFTPHARMA');

  }

  commonfunction(list, listname) {
    for (let i = 0; i <= list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        this.buttonDisabled = true;
        const obj = {
          sa: list[i],
          sb: list[j],
          sector: listname
        };
        setTimeout (() => {
          this.callApi(obj);
       }, 500);
      }
    }
  }
  callApi(input) {
    this.apiservice.TriggerPairTrade(input).subscribe(data => {
      this.buttonDisabled = false;
    });
  }

}
