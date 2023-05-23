import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'tested-lazy.component.html',
  styleUrls: ['tested-lazy.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestedLazyModuleComponent {}
