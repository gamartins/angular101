import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExampleAotService {

  constructor() { }


  public ask(question: string): Observable<string> {

    const parts = question.split(' ');
    const idx = Math.floor(Math.random() * parts.length);

    return of(`They never ${parts[idx]}!`);
  }
}