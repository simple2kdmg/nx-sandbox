import { ChangeDetectionStrategy, Component } from '@angular/core';
import { take } from 'rxjs';
import { ApplicationPath } from '../../enums';
import { NavigationItem } from '../../models';
import { PageInfoService, RouterParameterService } from '../../services';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBarComponent {
  readonly navItems: NavigationItem[] = [
    {
      pageCode: '',
      pageTitle: 'Default',
      relativeUrl: ApplicationPath.Default,
      sortOrder: 1,
    },
    {
      pageCode: '',
      pageTitle: 'MatcherTest',
      relativeUrl: ApplicationPath.MatcherTestPage,
      sortOrder: 2,
    },
    {
      pageCode: '',
      pageTitle: 'MatcherTest/child-two',
      relativeUrl: `${ApplicationPath.MatcherTestPage}/child-two`,
      sortOrder: 3,
    },
    {
      pageCode: '',
      pageTitle: 'MatcherTestTwo',
      relativeUrl: ApplicationPath.MatcherTestPageTwo,
      sortOrder: 4,
    },
    {
      pageCode: '',
      pageTitle: 'MatcherTestTwo/child-two',
      relativeUrl: `${ApplicationPath.MatcherTestPageTwo}/child-two`,
      sortOrder: 5,
    },
    /* {
      pageCode: '',
      pageTitle: 'MatcherTest/not-lazy',
      relativeUrl: `${ApplicationPath.MatcherTestPage}/not-lazy`,
      sortOrder: 6,
    },
    {
      pageCode: '',
      pageTitle: 'SameLazy page 1',
      relativeUrl: `${ApplicationPath.SameLazyTest}/same-lazy-one`,
      sortOrder: 7,
    },
    {
      pageCode: '',
      pageTitle: 'SameLazy page 2',
      relativeUrl: `${ApplicationPath.SameLazyTest}/same-lazy-two`,
      sortOrder: 8,
    }, */
  ];
  readonly currentUrl$ = this.pageInfoService.urlWithoutQuery$;

  constructor(
    private readonly routerParameterService: RouterParameterService,
    private readonly pageInfoService: PageInfoService
  ) {}

  onLinkClick(url: string): void {
    this.currentUrl$.pipe(take(1)).subscribe((currentUrl) => {
      if (currentUrl === url) return;

      this.routerParameterService.updateRoute({ url });
    });
  }
}
