import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedServiceService } from '../../shared-service.service';

@Component({
  selector: 'app-pairtrade',
  templateUrl: './pairtrade.component.html',
  styleUrls: ['./pairtrade.component.css']
})


export class PairtradeComponent implements OnInit {

  @ViewChild('name') abc;

  NIFTYBANK = 'NIFTYBANK';
  NIFTYAUTO = 'NIFTYAUTO';
  NIFTYFS = 'NIFTYFS';
  NIFTYFMCG = 'NIFTYFMCG';
  NIFTYIT = 'NIFTYIT';
  NIFTPHARMA = 'NIFTPHARMA';

  constructor(private apiservice: SharedServiceService) {
  }

  ngOnInit(): void {
  }

}
