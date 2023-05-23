import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChildTwoChildComponent } from './child-two-child.component';

const routes: Route[] = [
  {
    path: '',
    component: ChildTwoChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChildTwoChildModule {}
