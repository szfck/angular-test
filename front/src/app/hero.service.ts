import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {
  API_URL
} from './constant';

class ApiUrl {
  private static base = (url: string): string => `${API_URL}${url}`;

  static heroList = () => ApiUrl.base('/heroes');
  static hero = (heroId: number) => ApiUrl.base(`/heroes/${heroId}`);
  // static updateHero = (hero: Hero) => ApiUrl.base(`/heroes/${hero.id}`);
}

@Injectable()
export class HeroService {

	/** GET: get hero list */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(ApiUrl.heroList())
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
	}
	
	/** GET: get hero info */
  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(ApiUrl.hero(id)).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(ApiUrl.hero(hero.id), hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
