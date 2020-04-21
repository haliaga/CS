import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './Company';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { id: 11, name: 'Adidas' },
      { id: 12, name: 'BnpParibas' },
      { id: 13, name: 'Qantas' },
      { id: 14, name: 'PWC' },
      { id: 15, name: 'Crown' },
      { id: 16, name: 'Sony' },
      { id: 17, name: 'ANZ' }
    ];
    return { companies };
  }

  // Overrides the genId method to ensure that a company always has an id.
  // If the companies array is empty,
  // the method below returns the initial number (11).
  // if the companies array is not empty, the method below returns the highest
  // company id + 1.
  genId(companies: Company[]): number {
    return companies.length > 0 ? Math.max(...companies.map(company => company.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
