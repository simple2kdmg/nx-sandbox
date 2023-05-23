import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, ReplaySubject, Subject, takeUntil } from 'rxjs';
import { UpdateRouteProps } from '../models';

@Injectable({
  providedIn: 'root',
})
export class RouterParameterService implements OnDestroy {
  private routeUpdateQueue = new ReplaySubject<UpdateRouteProps>(1);
  private destroy$ = new Subject<void>();

  constructor(private readonly router: Router) {
    this.initRouteChangeSubscription();
  }

  updateRoute(props: UpdateRouteProps): void {
    this.routeUpdateQueue.next(props);
  }

  private initRouteChangeSubscription(): void {
    this.routeUpdateQueue
      .pipe(debounceTime(0), takeUntil(this.destroy$))
      .subscribe(({ url, queryParams }) => {
        this.router.navigate([url], {
          queryParams,
          queryParamsHandling: 'merge',
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
