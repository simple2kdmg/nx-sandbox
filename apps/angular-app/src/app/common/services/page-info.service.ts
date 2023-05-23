import { Injectable } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { map, distinctUntilChanged, filter } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { ApplicationPath } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class PageInfoService {
  readonly urlWithoutQuery$ = new ReplaySubject<ApplicationPath>(1);

  private readonly urlRegexp = new RegExp(/\/([\w-S/]*)(\?|$)/); // get everything between '/' and '?'

  constructor(private readonly router: Router) {
    this.router.events
      .pipe(
        filter((e: Event) => e instanceof NavigationEnd),
        map((e: Event) => {
          const navEndEv = e as NavigationEnd;
          return navEndEv.urlAfterRedirects || navEndEv.url;
        }),
        filter((url) => this.urlRegexp.test(url)),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        map((url) => url!.match(this.urlRegexp)![1] as ApplicationPath),
        distinctUntilChanged()
      )
      .subscribe(this.urlWithoutQuery$);
  }
}
