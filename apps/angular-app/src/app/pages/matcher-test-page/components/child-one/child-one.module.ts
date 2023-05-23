import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ChildOneComponent } from './child-one.component';

const routes: Route[] = [
  {
    path: '',
    component: ChildOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ChildOneModule {}
