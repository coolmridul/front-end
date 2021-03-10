import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { saveAs } from 'file-saver';


const apiUrls = {
  pairtrade_getdata : `${environment.baseUrL}/get_data`,
  intraday : `${environment.baseUrL}/kicker`,
  pairtrade_trig : `${environment.baseUrL}`,
  intraday_bearish : `${environment.baseUrL}/kicker_bearish`,
  earnings : `${environment.baseUrL}/earning`


};


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  
  constructor(private http: HttpClient) { }


  PairTradeGet() {
    return this.http.get<any>(apiUrls.pairtrade_getdata).pipe(catchError(this.handleError));
  }

  IntradayGet(data) {
    return this.http.post<any>(apiUrls.intraday, data).pipe(catchError(this.handleError));
  }

  BearishGet(data) {
    return this.http.post<any>(apiUrls.intraday_bearish, data).pipe(catchError(this.handleError));
  }

  EarningPost(data) {
    return this.http.post<any>(apiUrls.earnings, data).pipe(catchError(this.handleError));
  }


  TriggerPairTrade(data) {
    return this.http.post<any>(apiUrls.pairtrade_trig, data).pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  DownloadFile(data: any, filename) {

    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(data[0]);
    const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, filename + '.csv');
  }

}
