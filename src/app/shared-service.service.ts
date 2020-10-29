import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GlobalConstant } from './common/globalconstant';


const apiUrls = {
  pairtrade_getdata : `${GlobalConstant.baseUrL}/get_data`,
  intraday : `${GlobalConstant.baseUrL}/kicker`
};


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {




  constructor(private http: HttpClient) { }


  PairTradeGet() {
    return this.http.get<any>(apiUrls.pairtrade_getdata).pipe(catchError(this.handleError));
  }

  IntradayGet() {
    return this.http.get<any>(apiUrls.intraday).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
