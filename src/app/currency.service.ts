import { computed, Injectable, signal } from '@angular/core';
import { Currency, Curriencies, curriencies, exchangeRate, RecordInfo } from './data.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  
  currencies = signal<Currency[]>(curriencies);
  exchange = signal<Record<Curriencies, Record< string, RecordInfo>>>(exchangeRate);
  

  amt = signal<string>('1');
  fromCurrency = signal<Curriencies>('USD' as Curriencies);
  toCurrency = signal<Curriencies>('EUR' as Curriencies);

  // calculateVal = computed( () => 
  //   Number(this.amt()) * 
  // this.exchange()[this.fromCurrency()]['record_info'][this.toCurrency()]
  // );
  calculateVal = computed(() => {
    const amt = Number(this.amt());
    const exchange = this.exchange();
    const fromCurrency = this.fromCurrency();
    const toCurrency = this.toCurrency();
  
    if (exchange && exchange[fromCurrency] && exchange[fromCurrency]['record_info'] && exchange[fromCurrency]['record_info'][toCurrency]) {
      return amt * exchange[fromCurrency]['record_info'][toCurrency];
    } else {
      console.error('Exchange rate data is missing or incomplete');
      return 0; // or handle the error as needed
    }
  });
 
  
}
