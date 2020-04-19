import { Injectable } from '@angular/core';
import { Company } from './Company';
import { COMPANIES } from './mock_companies';
import { Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CsService {

  constructor() { }

  getCompanies(): Observable<Company[]> {
    return of(COMPANIES);
  }
}
