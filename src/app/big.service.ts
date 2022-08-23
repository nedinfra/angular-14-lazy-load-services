import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BigService {
  doSomething() {
    console.log('Hello from BigService');
  }
}
