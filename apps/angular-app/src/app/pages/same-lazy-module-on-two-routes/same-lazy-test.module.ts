import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SameLazyTestRoutingModule } from './same-lazy-test-routing.module';
import { SameLazyTestComponent } from './same-lazy-test.component';

@NgModule({
  declarations: [SameLazyTestComponent],
  imports: [CommonModule, SameLazyTestRoutingModule],
})
export class SameLazyTestModule {}
