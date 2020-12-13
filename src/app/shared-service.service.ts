import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';


const apiUrls = {
  pairtrade_getdata : `${environment.baseUrL}/get_data`,
  intraday : `${environment.baseUrL}/kicker`,
  pairtrade_trig : `${environment.baseUrL}`,

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

  TriggerPairTrade(data) {
    return this.http.post<any>(apiUrls.pairtrade_trig, data).pipe(catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
