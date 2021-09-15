import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseProviderService {

  constructor() { }

  log() {
    console.log('This is a message log')
  }
}
