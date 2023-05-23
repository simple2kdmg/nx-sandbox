import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'child-one.component.html',
  styleUrls: ['child-one.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponent {}
