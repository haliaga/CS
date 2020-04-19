import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './Company';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companies = [
      { id: 11, name: 'Philips', carboncredit: 6 },
      { id: 12, name: 'Aviva', carboncredit: 7 },
      { id: 13, name: 'Microsoft', carboncredit: 9 },
      { id: 14, name: 'Sony', carboncredit: 8 },
      { id: 15, name: 'BNPParibas', carboncredit: 4 },
      { id: 16, name: 'Adidas', carboncredit: 8 }
    ];
    return { companies };
  }

  // Overrides the genId method to ensure that a company always has an id.
  // If the companies array is empty,
  // the method below returns the initial number (11).
  // if the companies array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Company[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
