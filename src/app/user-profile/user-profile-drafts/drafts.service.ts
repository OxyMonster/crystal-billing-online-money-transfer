import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DraftsService {

  apiURL: string = '/api/transactions/get-billers';

  constructor(
    private http: HttpClient
  ) { }


  getBillers(langId: string) {
    return this.http.post(this.apiURL, {"languageId": langId} );
  }
}
