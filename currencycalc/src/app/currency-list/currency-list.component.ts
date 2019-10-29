import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/currency.model';
import { CurrencyService } from 'src/currency.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: Currency[];

  constructor(private currencyService: CurrencyService) {
    this.currencies = [];
  }

  ngOnInit() {
    this.currencyService.list().subscribe((currencies: Currency[]) => {
      this.currencies = currencies;
    });
  }

}
