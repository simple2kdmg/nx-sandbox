import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'child-two.component.html',
  styleUrls: ['child-two.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponent {}
