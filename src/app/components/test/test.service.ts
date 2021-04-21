import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TestService implements OnDestroy {
  private currentQuickFilters = new ReplaySubject<{}[] | null>(1);

  constructor() {
    alert('Still fired ctor');

    const quickFilterExpression = this.currentQuickFilters.pipe(
      map((quickFilters) => {
        if (quickFilters === null || !quickFilters.length) {
          return null;
        }

        return {};
      })
    );
  }

  ngOnDestroy(): void {
    alert('ngOnDestroy!');
  }

  test(): void {
    alert('===> In service');
  }
}
