import { Component } from '@angular/core';
import { BigService } from './big.service';
import { LazyInject } from './lazy.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private lazyInjector: LazyInject) {}

  async doSomething() {
    const service = await this.lazyInjector.get<BigService>(() =>
      import('./big.service').then((m) => m.BigService)
    );

    service.doSomething();
  }
}
