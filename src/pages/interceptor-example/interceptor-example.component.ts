import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor-example',
  template: `
    <h3>HTTP_INTERCEPTORS</h3>
    <button mat-raised-button color="primary" (click)="authRequest()">Make Authenticated request</button>
    <br><br>
    <button mat-raised-button color="accent" (click)="cachedRequest()">Make Cached request</button>
  `,
})
export class InterceptorExampleComponent implements OnInit {
  apiUrl = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  authRequest(): void {
    const random = Math.ceil(Math.random() * 10);

    this.http.get(`${this.apiUrl}/comments/${random}`).subscribe(res => console.log('auth', res))
  }

  cachedRequest(): void {
    this.http.get(`${this.apiUrl}/todos/1`).subscribe(res => console.log('cached', res))
  }

}
