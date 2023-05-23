import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  get initialize(): boolean {
    console.count('app component redrawn');
    return true;
  }
}
