import { Injectable } from '@angular/core';
import { BaseProviderService } from './base-provider.service';

@Injectable({
  providedIn: 'root'
})
export class BetterProviderService extends BaseProviderService {

  constructor() {
    super()
  }

  log() {
    console.log('This is a better log')
  }
}
