import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {
  DefaultPageComponent,
  DefaultPageContentComponent,
} from './default-page.component';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: DefaultPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [DefaultPageComponent, DefaultPageContentComponent],
})
export class DefaultPageModule {}
