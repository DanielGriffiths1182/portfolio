import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Skill } from './skill';
import { ProjectService } from './project.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SkillService {

  private skillsUrl = 'api/skills';  // URL to web api

  constructor(
    private http: HttpClient,
    private projectService: ProjectService) { }

  /** GET heroes from the server */
  getSkills (): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillsUrl)
      .pipe(
        tap(skills => this.log(`fetched skills`)),
        catchError(this.handleError('getSkills', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getSkillNo404<Data>(id: number): Observable<Skill> {
    const url = `${this.skillsUrl}/?id=${id}`;
    return this.http.get<Skill[]>(url)
      .pipe(
        map(skills => skills[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} skill id=${id}`);
        }),
        catchError(this.handleError<Skill>(`getSkill id=${id}`))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getSkill(id: number): Observable<Skill> {
    const url = `${this.skillsUrl}/${id}`;
    return this.http.get<Skill>(url).pipe(
      tap(_ => this.log(`fetched skill id=${id}`)),
      catchError(this.handleError<Skill>(`getSkill id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchSkills(term: string): Observable<Skill[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Skill[]>(`api/skills/?skillName=${term}`).pipe(
      tap(_ => this.log(`found skills matching "${term}"`)),
      catchError(this.handleError<Skill[]>('searchSkills', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addSkill (skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.skillsUrl, skill, httpOptions).pipe(
      tap((skill: Skill) => this.log(`added skill w/ id=${skill.id}`)),
      catchError(this.handleError<Skill>('addSkill'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteSkill (skill: Skill | number): Observable<Skill> {
    const id = typeof skill === 'number' ? skill : skill.id;
    const url = `${this.skillsUrl}/${id}`;

    return this.http.delete<Skill>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted skill id=${id}`)),
      catchError(this.handleError<Skill>('deleteSkill'))
    );
  }

  /** PUT: update the hero on the server */
  updateSkill (skill: Skill): Observable<any> {
    return this.http.put(this.skillsUrl, skill, httpOptions).pipe(
      tap(_ => this.log(`updated skill id=${skill.id}`)),
      catchError(this.handleError<any>('updateSkill'))
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

  /** Log a HeroService message with the MessageService */
  private log(project: string) {
    this.projectService.add('SkillService: ' + project);
  }
}
