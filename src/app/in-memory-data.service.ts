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
    const nows = ["20200101","20200201","20200301","20200401","20200501","20200601",
                  "20200701","20200801","20200901","20201001","20201101","20201201"];
    let companies= [];
    for (let i = 0; i < Ids.length; ++i) {
      for(let j=0; j<nows.length;++j){
        let data = {} as Company
        data.id=Ids[i];
        data.name=CompanyNames[i];
        data.now=nows[j];
        data.carboncredit = Math.floor(Math.random() * 10) + 1;
        data.electricity = Math.floor(Math.random() * 10) + 1;
        data.gas = Math.floor(Math.random() * 10) + 1;
        data.paper = Math.floor(Math.random() * 10) + 1;
        companies.push(data);
      }
    }
    /*
    const companies = [
      { id: 11, now: "1/1/2020",name: 'Adidas',carboncredit:10,electricity:20,gas:20,paper:10 },
      { id: 12, now: "1/1/2020",name: 'BnpParibas',carboncredit:9,electricity:21,gas:23,paper:12 },
      { id: 13, now: "1/1/2020", name: 'Qantas',carboncredit:8,electricity:27,gas:120,paper:100 },
      { id: 14, now: "1/1/2020", name: 'PWC',carboncredit:3,electricity:5,gas:2,paper:80 },
      { id: 15, now: "1/1/2020", name: 'Crown',carboncredit:100,electricity:200,gas:120,paper:34 },
      { id: 16, now: "1/1/2020", name: 'Sony',carboncredit:7,electricity:66,gas:55,paper:99 },
      { id: 17, now: "1/1/2020", name: 'ANZ',carboncredit:110,electricity:220,gas:123,paper:234 }
    ];*/
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
