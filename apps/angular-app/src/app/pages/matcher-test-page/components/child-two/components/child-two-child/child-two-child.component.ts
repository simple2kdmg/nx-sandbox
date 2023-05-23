import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'child-two-child.component.html',
  styleUrls: ['child-two-child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoChildComponent {}
