import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Repo } from './repo';
import { ProjectService } from './project.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepositoryService {
  //
  private reposUrl = 'api/repos';  // URL to web api

  constructor(
    private http: HttpClient,
    private projectService: ProjectService
  ) { }

  getRepos (): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.reposUrl)
      .pipe(
        tap(repos => this.log(`fetched repos`)),
        catchError(this.handleError('getRepos', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getRepo(id: number): Observable<Repo> {
    const url = `${this.reposUrl}/${id}`;
    return this.http.get<Repo>(url).pipe(
      tap(_ => this.log(`fetched repo id=${id}`)),
      catchError(this.handleError<Repo>(`getRepo id=${id}`))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getRepoNo404<Data>(id: number): Observable<Repo> {
    const url = `${this.reposUrl}/?id=${id}`;
    return this.http.get<Repo[]>(url)
      .pipe(
        map(repos => repos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} repo id=${id}`);
        }),
        catchError(this.handleError<Repo>(`getRepo id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(project: string) {
    this.projectService.add('SkillService: ' + project);
  }

}
