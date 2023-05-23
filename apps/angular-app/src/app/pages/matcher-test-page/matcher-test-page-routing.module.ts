import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { MatcherTestPageComponent } from './matcher-test-page.component';
import { NotLazyComponent } from './components/not-lazy-component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MatcherTestPageComponent,
        children: [
          {
            path: '',
            component: NotLazyComponent,
          },
          {
            matcher: (
              url: UrlSegment[],
              group: UrlSegmentGroup,
            ): UrlMatchResult | null => {
              // console.log(`DEBUG parent segments: ${JSON.stringify(group.segments.map(x => x.path))}`);
              return url[0] && url[0].path === 'child-two'
                ? { consumed: url }
                : null;
            },
            // path: 'child-two',
            loadChildren: () =>
              import('./components/child-two').then((m) => m.ChildTwoModule),
          },
          {
            path: 'child-one',
            loadChildren: () =>
              import('./components/child-one').then((m) => m.ChildOneModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class MatcherTestPageRoutingModule {}
