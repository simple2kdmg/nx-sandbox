import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationPath } from './common/enums';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ApplicationPath.Default,
        loadChildren: () =>
          import('./pages/default').then((m) => m.DefaultPageModule),
      },
      {
        path: ApplicationPath.MatcherTestPage,
        loadChildren: () =>
          import('./pages/matcher-test-page').then(
            (m) => m.MatcherTestPageModule
          ),
      },
      {
        path: ApplicationPath.MatcherTestPageTwo,
        loadChildren: () =>
          import('./pages/matcher-test-page').then(
            (m) => m.MatcherTestPageModule
          ),
      },
      {
        path: ApplicationPath.SameLazyTest,
        loadChildren: () =>
          import('./pages/same-lazy-module-on-two-routes').then(
            (m) => m.SameLazyTestModule
          ),
      },
      {
        path: '',
        redirectTo: `${ApplicationPath.Default}`,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
