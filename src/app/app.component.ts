import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyService } from './currency.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Currency, Curriencies } from './data.model';
import { CommonModule, DecimalPipe } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DecimalPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency-conv';
  service = inject(CurrencyService);
  exchange = this.service.exchange();

  amt = new FormControl('1');
  fromCurrency = new FormControl('USD' as Curriencies);
  toCurrency = new FormControl('EUR' as Curriencies);

  amtValuChange(amt: any) {
    this.service.amt.set(amt.value);
  }

  fromCurrencyChange(fromCurrency: any) {
    this.service.fromCurrency.set(fromCurrency.value);
  }

  toCurrencyChange(toCurrency: any) {
    this.service.toCurrency.set(toCurrency.value);
  } 
  convertedVal: number = 0;

  // convertedValue(amt: number|null, fromCurrency: Curriencies | null, toCurrency: Curriencies | null) {
  //   if (amt && fromCurrency && toCurrency) {
  //     const rate = this.exchange()[fromCurrency]['record_info'][toCurrency];
  //     this.convertedVal = amt * rate; 
  //   }
  //   return -1;
  // }

  // convertedValue1 = this.service.calculateVal();


}
