import { NgModule } from '@angular/core';
import {
  Route,
  RouterModule,
  UrlMatchResult,
  UrlSegment,
  UrlSegmentGroup,
} from '@angular/router';
import { ChildTwoComponent } from './child-two.component';
import { ChildTwoCloneComponent } from './components/child-two-clone';

const routes: Route[] = [
  {
    matcher: (
      url: UrlSegment[],
      group: UrlSegmentGroup
    ): UrlMatchResult | null => {
      console.log(
        `DEBUG matcher-test: ${JSON.stringify(
          group.segments.map((x) => x.path)
        )}`
      );
      return url[0] && url[0].path === 'matcher-test'
        ? { consumed: url }
        : null;
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/child-two-child').then(
            (m) => m.ChildTwoChildModule
          ),
      },
    ],
    component: ChildTwoComponent,
  },
  {
    matcher: (
      url: UrlSegment[],
      group: UrlSegmentGroup
    ): UrlMatchResult | null => {
      console.log(
        `DEBUG matcher-test-two: ${JSON.stringify(
          group.segments.map((x) => x.path)
        )}`
      );
      return url[0] && url[0].path === 'matcher-test-two'
        ? { consumed: url }
        : null;
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/child-two-child').then(
            (m) => m.ChildTwoChildModule
          ),
      },
    ],
    // path: '',
    component: ChildTwoCloneComponent,
  },
];

@NgModule({
  declarations: [ChildTwoComponent, ChildTwoCloneComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildTwoModule {}
