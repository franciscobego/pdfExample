import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

 const environment = {
    production: false,
    firebase: {
      apiKey: 'AIzaSyCrn8Hjli0I0rVAFQgyJge8yecAdDtn7Fs',
      authDomain: 'bego-dashboard-qa.firebaseapp.com',
      projectId: 'bego-dashboard-qa',
      storageBucket: 'bego-dashboard-qa.appspot.com',
      messagingSenderId: '935068094625',
      appId: '1:935068094625:web:1744505d44b752d57060e0',
    },
    //URL_BASE: 'https://dash-dev.bego.ai/',
    // URL_BASE: 'http://localhost:3003/',
    // URL_BASE: 'https://dash-qa.bego.ai/',
     URL_BASE: 'https://dash-rocket.bego.ai/',
    // SOCKET_URL: 'http://localhost:3008/',
    SOCKET_URI: 'https://slb.bego.ai/',
    api_stack_key: '500d1e2920e5b45b7c56125985ef96c8',
    link_preview_key: '5b44fa6a53a60845f1a4c463ff328f7e',
    URL_CALENDAR: 'https://calendar.bego.ai/',
    URL_MEET_REQ: 'http://localhost:4400/'
  };
@Injectable({
  providedIn: 'root',
})
export class ApiRestService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  public async apiRestGetHTML(method: string, options: object = {}): Promise<Observable<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin': '*',
      'Acceontrol-Allow-Headers': 'Content-Type, Accept',
      'Access-Css-Control-Allow-Methods': 'POST,GET,OPTIONS',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    const params = await this.getOptions(options);
    return this.httpClient.get<any>(environment.URL_BASE + method, { headers, params });
  }

  async getOptions(options: object) {
    const defaultValues: object = {
      loader: 'true',
      timeout: '30000',
      retry: '0',
      route: '',
      lang: 'es'
    };

    return new HttpParams({
      fromObject: {
        ...defaultValues,
        ...options,
      }
    });
  }
}