import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'not-lazy-component.component.html',
  styleUrls: ['not-lazy-component.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotLazyComponent {}
