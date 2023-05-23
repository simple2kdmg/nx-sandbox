import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'same-lazy-test.component.html',
  styleUrls: ['same-lazy-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SameLazyTestComponent {}
