import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'child-two-clone.component.html',
  styleUrls: ['child-two-clone.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoCloneComponent {}
