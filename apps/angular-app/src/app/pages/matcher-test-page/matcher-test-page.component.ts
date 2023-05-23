import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'matcher-test-page.component.html',
  styleUrls: ['matcher-test-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatcherTestPageComponent {}
