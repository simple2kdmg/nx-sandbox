import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  templateUrl: 'default-page.component.html',
  styleUrls: ['default-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultPageComponent {
  parentId: string | null = null;

  toggleContentId(): void {
    this.parentId = !this.parentId ? '123' : null;
  }
}

@Component({
  selector: 'default-page-content',
  template: ` <div *ngIf="id">DefaultPageComponentContent, id: {{ id }}</div> `,
  styles: [':host {display: block;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultPageContentComponent {
  @Input() id: string | null = null;
}
