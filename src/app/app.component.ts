import { Component } from '@angular/core';

export type EditorType = 'name' | 'profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carbon Credit Dashboard';
  editor: EditorType = 'name';

  get showNameEditor() {
    return this.editor === 'name';
  }
}
