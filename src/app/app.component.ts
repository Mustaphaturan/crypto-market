import { Component } from '@angular/core';
import { CurrencyService } from './service/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
selectedCurrency : string = "EUR";
constructor (private currenyService : CurrencyService){

}

sendCurrency(event:string){
  console.log(event);
  this.currenyService.setCurrency(event);
}
}
