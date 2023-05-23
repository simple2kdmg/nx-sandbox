import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatcherTestPageRoutingModule } from './matcher-test-page-routing.module';
import { MatcherTestPageComponent } from './matcher-test-page.component';
import { NotLazyComponentModule } from './components/not-lazy-component';

@NgModule({
  declarations: [MatcherTestPageComponent],
  imports: [CommonModule, MatcherTestPageRoutingModule, NotLazyComponentModule],
})
export class MatcherTestPageModule {}
