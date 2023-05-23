import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TestedLazyModuleComponent } from './tested-lazy.component';

const routes: Route[] = [
  {
    path: '',
    component: TestedLazyModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TestedLazyModule {
  constructor() {
    console.count(`DEBUG TestedLazyModule init`);
  }
}
