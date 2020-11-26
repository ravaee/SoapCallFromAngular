import { Component } from '@angular/core';
import { NgxSoapService, ISoapMethod, Client, ISoapMethodResponse } from 'ngx-soap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'soapClient';
  loading: boolean;
  showDiagnostic: boolean;
  message: string;
  xmlResponse: string;
  jsonResponse: string;
  resultLabel: string;
  client: Client;

  
  constructor(private soap: NgxSoapService) {
    this.soap.createClient('https://localhost:5001/Service.asmx')
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));
  }
  
  getCustomerProduct() {
    this.loading = true;

    const body = {
      customer: {
        Id: 2,
        Name: "hasan"
      }
    };

    this.client.call('TestCustomModel', body).subscribe(res => {
      console.log(res);
      this.xmlResponse = res.responseBody;
      this.message = res.result.AddResult;
      this.loading = false;
    }, err => console.log(err));

  }


  callSomeService(){
    this.getCustomerProduct();
  }
}
