import { Component } from '@angular/core';
import { ApiRestService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private webService: ApiRestService ){

  }

  async getDocument() {
    (await this.webService.apiRestGetHTML(`accounting/hubspot_deals/pdf/64ee31224ca2b6c568a1fdae`, { responseType: 'text' }))
      .subscribe(
        (response: string) => {
          console.log(response);
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      );
  }


}
