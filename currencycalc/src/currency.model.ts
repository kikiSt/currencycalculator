import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Currency {
    constructor(
        public id: number,
        public abbr: string,
        public value: number,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class CurrencyAdapter implements Adapter<Currency> {

    adapt(item: any): Currency {
        return new Currency(
            item.id,
            item.abbr,
            item.value,
        );
    }
}