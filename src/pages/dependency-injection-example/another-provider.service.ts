import { Inject, Injectable, InjectionToken } from '@angular/core';

export const APIURL = new InjectionToken<string>('');

@Injectable({
  providedIn: 'root'
})
export class AnotherProviderService {

  constructor(
    @Inject(APIURL) public apiUrl: string
  ) { }

  log() {
    console.log('This is the apiUrl', this.apiUrl)
  }
}
