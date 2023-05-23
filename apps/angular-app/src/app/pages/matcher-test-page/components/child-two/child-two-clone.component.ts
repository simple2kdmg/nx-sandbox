import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  template: `
    <div style="padding: .5em; border: 1px solid black">ChildTwoClone</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoCloneComponent {}
