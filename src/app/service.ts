import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

 const environment = {
     URL_BASE: 'https://url/'
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