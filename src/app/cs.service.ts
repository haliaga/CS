import { Injectable } from '@angular/core';
import { Company } from './Company';
import { COMPANIES } from './mock_companies';

@Injectable({
  providedIn: 'root'
})
export class CsService {

  constructor() { }

  getCompanies(): Company[] {
    return COMPANIES;
  }
}
