import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SameLazyTestComponent } from './same-lazy-test.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SameLazyTestComponent,
        children: [
          {
            path: 'same-lazy-one',
            loadChildren: () =>
              import('./components/tested-lazy-module').then(
                (m) => m.TestedLazyModule
              ),
          },
          {
            path: 'same-lazy-two',
            loadChildren: () =>
              import('./components/tested-lazy-module').then(
                (m) => m.TestedLazyModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SameLazyTestRoutingModule {}
