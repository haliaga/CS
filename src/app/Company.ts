import { NumberSymbol } from '@angular/common';

export interface Company {
  id: number;
  shortid:number;
  now: string;
  name: string;
  electricity:number;
  gas:number;
  paper:number;
  petrol:number;
  organictrash:number;
  flights:Number;
}
