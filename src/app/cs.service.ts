import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Company } from './Company';
import { MsgService } from './msg.service';

@Injectable({
  providedIn: 'root'
})
export class CsService {
  private companiesUrl = 'api/companies'; //URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private msgService: MsgService
  ) { }

  getCompanies(): Observable<Company[]> {
    const thisHttp_ = this.http.get<Company[]>(this.companiesUrl);
    return thisHttp_
      .pipe(
        tap(_ => this.log('fetched companies')),
        catchError(this.handleError<Company[]>('getCompanies', []))
      );
  }

  /** GET company by id. Return `undefined` when id not found */
  getCompanyNo404<Data>(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/?id=${id}`;
    const thisHttp_ = this.http.get<Company[]>(url);
    return thisHttp_
      .pipe(
        map(companies => companies[0]), // returns a {0|1} element array
        tap(c => {
          const outcome = c ? `fetched` : `did not find`;
          this.log(`${outcome} company id=${id}`);
        }),
        catchError(this.handleError<Company>(`getCompany id=${id}`))
      );
  }

  /** GET company by id. Will 404 if id not found */
  getCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}/${id}`;
    const thisHttp_ = this.http.get<Company>(url);
    return thisHttp_.pipe(
      tap(_ => this.log(`fetched company id=${id}`)),
      catchError(this.handleError<Company>(`getCompany id=${id}`))
    );
  }

  /* GET companies whose name contains search term */
  searchCompanies(term: string): Observable<Company[]> {
    if (!term.trim()) {
      // if not search term, return empty company array.
      return of([]);
    }
    const thisHttp_ = this.http.get<Company[]>(`${this.companiesUrl}/?name=${term}`)
    return thisHttp_.pipe(  
      tap(x => x.length ?
        this.log(`found companies matching "${term}"`) :
        this.log(`no companies matching "${term}"`)),
      catchError(this.handleError<Company[]>('searchCompanies', []))
    );
  }

  /** POST: add a new company to the server */
  addCompany(company: Company): Observable<Company> {
    const thisHttp_ = this.http.post<Company>(this.companiesUrl, company, this.httpOptions)
    return thisHttp_.pipe(
      tap((newCompany: Company) => this.log(`added company w/ id=${newCompany.id}`)),
      catchError(this.handleError<Company>('addCompany'))
    );
  }
  /** DELETE: delete the company from the server */
  deleteCompany(company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.companiesUrl}/${id}`;
    const thisHttp_ = this.http.delete<Company>(url, this.httpOptions);
    return thisHttp_.pipe(
      tap(_ => this.log(`deleted company id=${id}`)),
      catchError(this.handleError<Company>('deleteCompany'))
    );
  }

  /** PUT: update the company on the server */
  updateCompany(company: Company): Observable<any> {
    const thisHttp_ = this.http.put(this.companiesUrl, company, this.httpOptions);
    return thisHttp_.pipe(
      tap(_ => this.log(`updated company id=${company.id}`)),
      catchError(this.handleError<any>('updateCompany'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(mesage: string) {
    this.msgService.add('CsService: ${message}');
  }
}
