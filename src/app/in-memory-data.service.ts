import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Company } from './Company';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const CompanyNames = ['Adidas','BNPParibas','Qnatas','PWC','Crown','Sony','ANZ'];
    const Ids = [11,12,13,14,15,16,17];
    const nows = [20200101,20200201,20200301,20200401,20200501,20200601,
                  20200701,20200801,20200901,20201001,20201101,20201201];
    let companies= [];
    for (let i = 0; i < Ids.length; ++i) {
      for(let j=0; j<nows.length;++j){
        let data = {} as Company
        data.id=Ids[i]*1E12+nows[j];
        data.shortid=Ids[i];
        data.name=CompanyNames[i];
        data.now=nows[j];
        data.carboncredit = Math.floor(Math.random() * 10) + 1;
        data.electricity = Math.floor(Math.random() * 10) + 1;
        data.gas = Math.floor(Math.random() * 10) + 1;
        data.paper = Math.floor(Math.random() * 10) + 1;
        companies.push(data);
      }
    }
    return { companies };
  }

  // Overrides the genId method to ensure that a company always has an id.
  // If the companies array is empty,
  // the method below returns the initial number (11).
  // if the companies array is not empty, the method below returns the highest
  // company id + 1.
  genId(companies: Company[]): number {
    const id = companies.length > 0 ? Math.max(...companies.map(company => company.id)) + 1 : 11;
    return id;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
