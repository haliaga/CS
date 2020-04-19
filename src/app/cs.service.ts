import { Injectable } from '@angular/core';
import { Company } from './Company';
import { COMPANIES } from './mock_companies';
import { Observable, of } from 'rxjs';
import { MsgService } from './msg.service'

@Injectable({
  providedIn: 'root'
})
export class CsService {

  constructor(private msgService: MsgService) { }

  getCompanies(): Observable<Company[]> {
    this.msgService.add('CsService: fetched companies');
    return of(COMPANIES);
  }
}
